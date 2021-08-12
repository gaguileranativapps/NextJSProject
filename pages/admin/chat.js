import React, { useState, useEffect } from "react";

import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";

import nookies from 'nookies';

import * as TwilioChat from 'twilio-chat';

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  TypingIndicator,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";

function Chat(props) {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const client = await TwilioChat.Client.create(props.twilio_token);

    const channelsDescriptor = await client.getUserChannelDescriptors();
    const selectedChannel = channelsDescriptor.items[0] || null;

    client.on('channelJoined', (channel) => {
      setChannels([channel, ...channels]);
    });

    setChannels(channelsDescriptor.items);
    setSelectedChannel(selectedChannel);

    if (selectedChannel) {
      const messagesDescriptor = await selectedChannel.getMessages();
      setMessages(messagesDescriptor.items);
    }
  }, []);

  useEffect(async () => {
    if (!selectedChannel) {
      return;
    }

    const messagesDescriptor = await selectedChannel.getMessages();
    setMessages(messagesDescriptor.items);
    selectedChannel.on('messageAdded', (message) => {
      setMessages([...messages, message]);
    });
  }, [selectedChannel]);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Chat 
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody style={{height: '600px'}}>
                <MainContainer responsive>
                  <Sidebar position="left">
                    <Search placeholder="Search..." />
                    <ConversationList>                                                     
                      <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Lilly" status="available" />
                      </Conversation>
                    
                      <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Joe" status="dnd" />
                      </Conversation>
                      
                      <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Emily" status="available" />
                      </Conversation>
                      
                      <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Kai" status="unavailable" />
                      </Conversation>
                    </ConversationList>
                  </Sidebar>
                  <ChatContainer>
                    <ConversationHeader>
                      <ConversationHeader.Back />
                      <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Zoe" />
                      <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                    </ConversationHeader>
                    <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
                      <MessageSeparator content="Saturday, 30 November 2019" />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "single"
                      }}>
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Zoe" />
                      </Message>
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Patrik",
                        direction: "outgoing",
                        position: "single"
                      }} avatarSpacer />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "first"
                      }} avatarSpacer />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "normal"
                      }} avatarSpacer />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "normal"
                      }} avatarSpacer />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "normal"
                      }} avatarSpacer />
                      <Message model={{
                        message: "Hello my friend",
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "last"
                      }}>
                        <Avatar src={'https://ui-avatars.com/api/?name=Zoe+XD&background=random'} name="Zoe" />
                      </Message>
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                  </ChatContainer>
                </MainContainer>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Chat.layout = Admin;

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const firebase_token = cookies.token;

  const response = await fetch(`${process.env.API_URL}/api/twilio/token`, {
    headers: {
      'Authorization': `Bearer ${firebase_token}`,
    },
  });
  const data = await response.json();

  return {
    props: {
      twilio_token: data.twilio_access_token,
    },
  };
}

export default Chat;
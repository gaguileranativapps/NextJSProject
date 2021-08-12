import nc from "next-connect";
import Twilio from 'twilio';

import firebaseAuthentication from '../../../middlewares/firebaseAuthentication';

const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

const handler = nc()
  .use(firebaseAuthentication)
  .get((req, res) => {
    const chatGrant = new ChatGrant({
      serviceSid: process.env.TWILIO_CHAT_SID,
    });

    const token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET,
      { identity: req.currentUser.email }
    );
    token.addGrant(chatGrant);

    return res.status(200).json({
      twilio_access_token: token.toJwt(),
      identity: req.currentUser.email,
    });
  });

export default handler;
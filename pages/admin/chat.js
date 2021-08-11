import React from "react";

import Admin from "layouts/Admin.js";
import Header from "components/Headers/Header.js";

function Chat(props) {
  return (
    <>
      <Header />
      <div>Chat page</div>
    </>
  );
}

Chat.layout = Admin;

export default Chat;
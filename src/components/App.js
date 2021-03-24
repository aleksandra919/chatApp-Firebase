import React from "react";
import "../style/App.css";
import Messages from "./Messages";
import AddMessage from "./AddMessage";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const App = (props) => {
  const messages = useSelector((state) => state.messages);

  const { userType, chatWith, chatWithImg } = props;

  useFirebaseConnect(["chat"]);

  const chat = useSelector((state) => state.firebase.ordered.chat);

  console.log("chat", chat);

  if (!isLoaded(chat)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(chat)) {
    return <div>Todos List Is Empty</div>;
  }

  return (
    <Container className="app">
      <Row>
        <Col>
          <div className="app-header clearfix">
            <img src={chatWithImg} alt="avatar" />
            <div className="app-about">
              <div className="app-with">Chat with {chatWith}</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Messages messages={chat} userType={userType} />
          <AddMessage userType={userType} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

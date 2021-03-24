import React from "react";
import "../style/App.css";
import Messages from "./Messages";
import AddMessage from "./AddMessage";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";

const App = (props) => {
  const messages = useSelector((state) => state.messages);

  const { userType, chatWith, chatWithImg } = props;

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
          <Messages messages={messages} userType={userType} />
          <AddMessage userType={userType} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

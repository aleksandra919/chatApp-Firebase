import React, { Component } from 'react';
import '../style/App.css';
import Messages from './Messages'
import AddMessage from './AddMessage'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    const { messages } = this.props;
    return (
      <Container className="app">
        <Row>
          <Col>
            <div className="app-header clearfix">
              <img src={this.props.chatWithImg} alt="avatar" />
              <div className="app-about">
                <div className="app-with">Chat with {this.props.chatWith}</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Messages 
                messages={messages}
                userType= {this.props.userType} />

            <AddMessage addMessage={this.addMessage}
                        messages={messages}
                        userType= {this.props.userType} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  if(state.firestore.ordered.chat) {
    return {messages: state.firestore.ordered.chat} 
  } else {
    return {messages: state.message.messages} 
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'chat'}
  ])
)(App);

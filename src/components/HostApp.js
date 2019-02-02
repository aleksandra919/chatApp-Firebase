import React, { Component } from 'react';
import '../style/App.css';
import Messages from './Messages'
import AddMessage from './AddMessage'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

class HostApp extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="App">
        <Messages 
            messages={messages}/>
        <AddMessage addMessage={this.addMessage}
                    messages={messages}
                    userType="host"/>

      </div>
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
)(HostApp);

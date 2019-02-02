import React, { Component } from 'react';
import '../style/App.css';
import Messages from './Messages'
import AddMessage from './AddMessage'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

class ClientApp extends Component {

  // addMessage = (message) => {
  //   message.id = Math.random();
  //   let messages = [...this.state.messages, message]
  //   this.setState({
  //     messages: messages
  //   })
  // }

  render() {
    const { messages } = this.props;
    console.log('this props',this.props)
    return (
      <div className="App">
        <Messages 
            messages={messages}/>
        <AddMessage addMessage={this.addMessage}
                    messages={messages}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("ola",state)
  // console.log('aaa', state.firestore.ordered.chat);

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
)(ClientApp);

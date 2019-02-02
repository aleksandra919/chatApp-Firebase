import React, { Component } from 'react';
import '../style/App.css';
import Messages from './Messages'
import AddMessage from './AddMessage'

class App extends Component {
  state = {
    messages: [
      {text: '1Message', id: 1, user: 'Ola', type: 'client'},
      {text: '2Message', id: 2, user: 'Ola', type: 'host'},
      {text: '3Message', id: 3, user: 'Ola', type: 'client'},
    ]
  }

  addMessage = (message) => {
    message.id = Math.random();
    let messages = [...this.state.messages, message]
    this.setState({
      messages: messages
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">ChattApp</header> */}
        <Messages 
            messages={this.state.messages}/>
        <AddMessage addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import '../style/App.css';
import Messages from './Messages'
import AddMessage from './AddMessage'
import { connect } from 'react-redux'

class ClientApp extends Component {

  // addMessage = (message) => {
  //   message.id = Math.random();
  //   let messages = [...this.state.messages, message]
  //   this.setState({
  //     messages: messages
  //   })
  // }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Messages 
            messages={this.props.messages}/>
        <AddMessage addMessage={this.addMessage}
                    messages={this.props.messages}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      messages: state.messages
    }
}


export default connect(mapStateToProps)(ClientApp);

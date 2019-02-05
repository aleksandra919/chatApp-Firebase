import {Component} from "react";
import React from "react";


class Messages extends Component {
    renderMessage(message) {
        let userType = ((message.type === "host" && this.props.userType === "host") || (message.type === "client" && this.props.userType === "client"))? 'message other-message float-right': 'message my-message';
        let textAlign = ((message.type === "host" && this.props.userType === "host") || (message.type === "client" && this.props.userType === "client"))? 'message-data align-right': 'message-data';
        return(
            <li className='clearfix' key={message.id}>
                <div className={textAlign}>
                    <i className="fa fa-circle circle"></i><span className="message-data-name">{message.type}</span> 
                    <span className="message-data-time">{message.createdDate}</span> &nbsp; &nbsp;
                </div>  
                <div className={userType}>
                    {message.text}
                </div>
            </li>
        )
    };

    render() {
        
      const {messages} = this.props;
      this.props.messages.sort((a,b) => (a.createdDate > b.createdDate) ? 1 : ((b.createdDate > a.createdDate) ? -1 : 0)); 
      if(messages !== undefined) {
        return (
            <div className="app-history">
                <ul>
                    {messages.map(m => this.renderMessage(m))}
                </ul>
            </div>
   
        );
      }
    }
  }
  





export default Messages;
import {Component} from "react";
import React from "react";


class Messages extends Component {
    renderMessage(message) {
        let userType = ((message.type === "host" && this.props.userType === "host") || 
                        (message.type === "client" && this.props.userType === "client")) ? 
                        'message other-message float-right': 'message my-message';

        let textAlign = ((message.type === "host" && this.props.userType === "host") || 
                         (message.type === "client" && this.props.userType === "client")) ?
                         'message-data align-right': 'message-data';

        let milliseconds = message.createdAt.toMillis();
        let dateToDisplay = new Date(milliseconds).toString().slice(0, 25);
        
        return(
            <li className='clearfix' key={message.id}>
                <div className={textAlign}>
                    <i className="fa fa-circle circle"></i><span className="message-data-name">{message.type}</span> 
                    <span className="message-data-time">{dateToDisplay}</span> &nbsp; &nbsp;
                </div>  
                <div className={userType}>
                    {message.text}
                </div>
            </li>
        )
    };

    render() {        
      const {messages} = this.props;
      this.props.messages.sort((a,b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)); 
      if(messages !== undefined) {
        return (
            <div className="app-history"
                ref={(ref) => {
                    this.appHistory = ref;
            }}>
                <ul>
                    {messages.map(m => this.renderMessage(m))}
                </ul>
            </div>
        );
      }
    }

    scrollToBottom() {
        const scrollHeight = this.appHistory.scrollHeight;
        const height = this.appHistory.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.appHistory.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      }

      componentDidUpdate() {
        this.scrollToBottom();
      }
  }
  
export default Messages;
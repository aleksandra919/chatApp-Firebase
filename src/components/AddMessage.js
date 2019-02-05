import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../store/actions/addMessage'

class AddMessage extends Component {
    state = {
        text: '',
        type: ''
      }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
            type: this.props.userType
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
    }

    render() { 
        return ( 
        <div className="app-message clearfix" >
            <form className="app-message clearfix" 
                  onSubmit={this.handleSubmit}>
                <textarea name="message-to-send" 
                          id="message-to-send" 
                          placeholder ="Type your message" 
                          rows="3"
                          onChange={this.handleChange} 
                />
                <button>Send</button>
            </form>
            <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-file-image-o"></i>
        </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addMessage: (message) => { dispatch(addMessage(message))}
    }
  }
 //first parameter is mapStateToProps
export default connect(null, mapDispatchToProps)(AddMessage);
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
        this.myTextInput.value = '';
    }

    render() { 
        return ( 
        <div className="add-message clearfix" >
            <form className="add-message clearfix" 
                  onSubmit={this.handleSubmit}>
                <textarea name="message-to-send" 
                          id="message-to-send" 
                          ref={ref => this.myTextInput = ref} 
                          placeholder ="Type your message..." 
                          rows="3"
                          onChange={this.handleChange} 
                />
                <button>Send</button>
            </form>
        </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addMessage: (message) => { dispatch(addMessage(message))}
    }
  }

export default connect(null, mapDispatchToProps)(AddMessage);
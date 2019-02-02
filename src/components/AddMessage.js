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
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="message">message:</label>
                <input type="text" id="message" onChange={this.handleChange} />
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
 //first parameter is mapStateToProps
export default connect(null, mapDispatchToProps)(AddMessage);
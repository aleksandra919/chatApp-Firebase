import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../store/actions/addMessage'

class AddMessage extends Component {
    state = {
        user: 'Olaa',
        text: '',
        type: 'client'
      }

    handleChange = (e) => {
        this.setState({
            user: this.state.user,
            text: e.target.value
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
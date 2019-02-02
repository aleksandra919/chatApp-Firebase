import React, { Component } from 'react';

class AddMessage extends Component {
    state = {
        user: 'Olaa',
        text: ''
      }

    handleChange = (e) => {
        this.setState({
            user: this.state.user,
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state)
        this.setState({
            text: ''
        })
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
 
export default AddMessage;
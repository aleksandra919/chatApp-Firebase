import App from './App'
import React, { Component } from 'react';
import clientAvatar from '../assets//clientAvatar.jpg';

class HostView extends Component {
    state = {  }
    render() { 
        return ( 
            <App
                userType="host" 
                chatWith='Client'
                chatWithImg={clientAvatar}
                />
         );
    }
}
 
export default HostView;
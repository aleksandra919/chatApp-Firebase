import App from './App'
import React, { Component } from 'react';
import hostAvatar from '../assets//hostAvatar.jpg';

class ClientView extends Component {
    state = {  }
    render() { 
        return ( 
            <App
                userType="client" 
                chatWith='Host'
                chatWithImg={hostAvatar}
                />
         );
    }
}
 
export default ClientView;
import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div>
            <h2>Live chat</h2>
            <p>Application enable to chat between host and client in real time</p>
            <p>Application has view for client (http://domain.name/client) and host. (http://domain.name/host)</p>
            <p>All massages are store on firebase</p>

            <p>Application was built using:
              <li>React.js</li>
              <li>Redux</li>
              <li>Reactstrap</li>
              <li>Firebase</li>
            </p>
        </div>
    );
  }
}

export default Home;
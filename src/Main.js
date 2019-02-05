import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Client from "./Client";
import Host from "./Host";

class Main extends Component {
    render() {
      return (
        <HashRouter>
            <div className="container">
                <ul className="header">
                <li><NavLink exact to="/">Home- about App</NavLink></li>
                <li><NavLink to="/client">Client</NavLink></li>
                <li><NavLink to="/host">Host</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/client" component={Client} />
                    <Route path="/host" component={Host} />
                </div>
            </div>
        </HashRouter>
      );
    }
  }

export default Main;

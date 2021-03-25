import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

import reactjs from "./assets/reactjs.png";
import redux from "./assets/redux.png";
import reactstrap from "./assets/reactstrap.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h2>Live chat</h2>
          <p>Application enable to chat between host and client in real time</p>
        </div>
        <div>
          <h2>Application has two views:</h2>
          <p>
            <b>Client view: </b> (http://domain.name/client){" "}
          </p>
          <p>
            <b>Host view: </b> (http://domain.name/host)
          </p>

          <h2>Application was built using:</h2>

          <div className="technologies">
            <Card>
              <CardBody>
                <CardTitle tag="h5">React</CardTitle>
                <CardText>E.g. Hooks, functional and class components</CardText>
                <CardImg top width="100%" src={reactjs} alt="React.js icon" />
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <CardTitle tag="h5">Redux</CardTitle>
                <CardText>E.g. createSlice</CardText>
                <CardImg top width="100%" src={redux} alt="Redux icon" />
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <CardTitle tag="h5">Reactstrap</CardTitle>
                <CardText> E.g. Container, Card, Row, Col </CardText>
                <CardImg
                  top
                  width="100%"
                  src={reactstrap}
                  alt="Reactstrap icon"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;

import React from "react";
import { Container, Row , Button} from "react-bootstrap";
import './Landing.css'

const Landing = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intra-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One safe place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">Login</Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingButton" variant="outline-primary">Sign Up</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;

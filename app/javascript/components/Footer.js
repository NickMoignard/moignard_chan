import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



class Footer extends React.Component {
  render () {
    return (
      <Container className="">
        <Row>
          <Col>
            <ul className="list-unstyled">
              <li className="text-center"><a href="#">about</a></li>
              <li className="text-center"><a href="#">contact</a></li>
              <li className="text-center"><a href="#">legal</a></li>
            </ul>
          </Col>
          <Col>
          <ul className="list-unstyled">
              <li className="text-center"><a href="#">site link</a></li>
              <li className="text-center"><a href="#">site link</a></li>
              <li className="text-center"><a href="#">site link</a></li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li className="text-center"><a href="#">site link</a></li>
              <li className="text-center"><a href="#">site link</a></li>
              <li className="text-center"><a href="#">site link</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <p>copyright moignard moignard moignard copyright moignard moignard moignard </p>
        </Row>
      </Container>
    );
  }
}

export default Footer

import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import classes from "./Info.module.css";

import { connect } from "react-redux";
const Info = (props) => (
  <div className={classes.ContainerDiv}>
    <Container>
      <Row>
        <Col lg="3" md="6" sm="12">
          <hr className="light" />
          <h3>TOMMY GYM</h3>
          <hr className="light" />
          <p>555-555-5555</p>
          <p>email@myemail.com</p>
          <p>100 Street Name</p>
          <p>City,Stota,00000</p>
        </Col>
        <Col lg="3" md="6" sm="12">
          <hr className="light" />
          <p>Our Hours</p>
          <hr className="light" />
          <p>Monday: 9am-5pm</p>
          <p>Saturday: 10am-4pm</p>
          <p>Sunday: Closed</p>
        </Col>
        <Col lg="3" md="6" sm="12">
          <hr className="light" />
          <p>Service Area</p>
          <hr className="light" />
          <p>City,Stota,00000</p>
          <p>City,Stota,00000</p>
          <p>City,Stota,00000</p>
        </Col>
        <Col lg="3" md="6" sm="12">
          <Image src={props.ctr[0]} fluid className={classes.saleImg} />
        </Col>
      </Row>
    </Container>
  </div>
);

const mapStateToProps = (state) => {
  return {
    ctr: state.footer,
  };
};
export default connect(mapStateToProps)(Info);

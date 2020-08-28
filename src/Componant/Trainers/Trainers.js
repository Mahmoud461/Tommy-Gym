import React from "react";
import classes from "./Trainers.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Trainer from "./Card/Trainer";
import { connect } from "react-redux";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";

import { AiFillStar } from "react-icons/ai";
const Trainers = (props) => {
  return (
    <div className={classes.ContainerDiv} id="Trainers">
      <Slide top>
        <h1>MEET OUR TRAINERS</h1>
      </Slide>
      <AiFillStar className={classes.Icon} />{" "}
      <AiFillStar className={classes.Icon} />
      <Container>
        <Row>
          {props.team.map((elemnt) => (
            <Col lg="4" md="6 " sm="12" key={elemnt.name}>
              <Pulse>
                <Trainer img={elemnt.img} name={elemnt.name} />
              </Pulse>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    team: state.team,
  };
};
export default connect(mapStateToProps)(Trainers);

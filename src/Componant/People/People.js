import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";

import classes from "./People.module.css";
const People = (props) => (
  <div className={classes.ContainerDiv} id="Results">
    <Slide top>
      <h1>REAL WORLD RESULTS</h1>
    </Slide>
    <AiFillStar className={classes.Icon} />{" "}
    <AiFillStar className={classes.Icon} />
    <Container>
      <Row>
        {props.people.map((element) => (
          <Col lg="6" sm="12">
            <Pulse>
              <div className={classes.PeopleCard}>
                <img src={element.img} className={classes.PeopleImg} />
                <div>
                  <p className={classes.PeopleP}>
                    Body transformations are more than 'before' and 'after'
                    pics. Behind those smiles and fresh gym kit, there's an
                    inspiring story to be told about how they embarked on their
                    journey to a healthier self.
                  </p>
                  <h6>{element.name}</h6>
                </div>
              </div>
            </Pulse>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);
const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};
export default connect(mapStateToProps)(People);

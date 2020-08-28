import React from "react";
import classes from "./Cards.module.css";
import { Row, Col, Container } from "react-bootstrap";
import icon1 from "../../Images/icon1.png";
import icon4 from "../../Images/icon4.png";
import Pulse from "react-reveal/Pulse";
import icon3 from "../../Images/icon3.png";
import { FaBiking } from "react-icons/fa";
const Cards = () => (
  <div className={classes.ContainerDiv}>
    <Container>
      <Pulse>
        <Row>
          <Col lg="3" me="6" sm="12">
            <div className={classes.CardDiv}>
              <div className={classes.ImagDiv}>
                <img src={icon1} className={classes.CardIcon1} />
              </div>
              <h5>strength & conditioning</h5>
              <p>
                A strength and conditioning coach is a physical performance
                professional who uses exercise prescription to improve the
                performance of competitive athletes or athletic teams.
              </p>
            </div>
          </Col>
          <Col lg="3" me="6" sm="12">
            <div className={classes.CardDiv}>
              <div className={classes.ImagDiv}>
                <FaBiking className={classes.Icon} />
              </div>
              <h5>Fitness & Cardio</h5>
              <p>
                What’s the first thing you think of when you hear “cardio?”
                Probably running, maybe the elliptical machine, stationary bike,
                or even rowing.
              </p>
            </div>
          </Col>
          <Col lg="3" me="6" sm="12">
            <div className={classes.CardDiv}>
              <div className={classes.ImagDiv}>
                <img src={icon3} className={classes.CardIcon} />
              </div>
              <h5>Relaxation & Rest</h5>
              <p>
                A strength and conditioning coach is a physical performance
                professional who uses exercise prescription to improve the
                performance of competitive athletes or athletic teams.
              </p>
            </div>
          </Col>
          <Col lg="3" me="6" sm="12">
            <div className={classes.CardDiv}>
              <div className={classes.ImagDiv}>
                <img src={icon4} className={classes.CardIcon} />
              </div>
              <h5>Health & Diet</h5>
              <p>
                Keeping active and eating a healthy balanced diet also help you
                to maintain a healthy weight. Deficiencies in some key nutrients
                - such as vitamin A, B, C and E, and zinc, iron and selenium -
                can weaken parts of your immune system.
              </p>
            </div>
          </Col>
        </Row>
      </Pulse>
    </Container>
  </div>
);
export default Cards;

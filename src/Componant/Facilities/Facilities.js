import React from "react";
import classes from "./Facilities.module.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import { connect } from "react-redux";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";

import { AiFillStar } from "react-icons/ai";
const Facilities = (props) => (
  <div className={classes.DivContainer} id="Facilities">
    <Slide top>
      <h1>HIGH PREFORMANCE Facilities</h1>
    </Slide>
    <AiFillStar className={classes.Icon} />{" "}
    <AiFillStar className={classes.Icon} />
    <Container>
      <Row>
        {props.images.map((elemnt) => (
          <Col lg="4" md="6" sm="12">
            <Pulse>
              <Image fluid className={classes.FacilImag} src={elemnt} />
            </Pulse>
          </Col>
        ))}
      </Row>
    </Container>
    <Zoom bottom>
      <button className={classes.headerBtn}>SHOW MORE</button>
    </Zoom>
  </div>
);
const mapStateToProps = (state) => {
  return {
    images: state.facilities,
  };
};
export default connect(mapStateToProps)(Facilities);

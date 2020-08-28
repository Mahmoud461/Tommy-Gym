import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Img2 from "../../Images/img2.jpg";
import classes from "./SignUp.module.css";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
const SignUp = () => (
  <div className={classes.ContainerDiv} id="signUp">
    <Container>
      <Row>
        <Col lg="6" sm="12">
          <Flip left>
            <Image src={Img2} alt="SignUp" fluid />
          </Flip>
        </Col>
        <Col lg="6" sm="12">
          <Slide right>
            <div className={classes.Form}>
              <h2>Sign Up For A Free Training Session</h2>
              <form>
                <div>
                  <label className={classes.SignUpLabel}>Name</label>
                  <br />
                  <input className={classes.SignUpInput} type="text" />
                </div>
                <div>
                  <label className={classes.SignUpLabel}>Email</label>
                  <br />
                  <input className={classes.SignUpInput} type="text" />
                </div>
                <button className={classes.headerBtn}>SIGN NOW!</button>
              </form>
            </div>
          </Slide>
        </Col>
      </Row>
    </Container>
  </div>
);
export default SignUp;

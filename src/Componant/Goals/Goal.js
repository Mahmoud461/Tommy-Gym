import React from "react";
import classes from "./Goal.module.css";
import { Row, Col } from "react-bootstrap";
const Goal = () => (
  <div className={classes.ContainerDiv}>
    <Row>
      <Col lg="9" md="7" sm="12">
        <h1>Achieve Your Fitness Goals</h1>
        <p>
          There are times in life where we all wish we would have known more. In
          life, career, relationships, and even working out, there are lessons
          to be learned that we usually see more clearly once we've accomplished
          a goal or completed a task.
        </p>{" "}
      </Col>
      <Col lg="3" md="5" sm="12">
        <button className={classes.headerBtn}>JOIN US</button>
      </Col>
    </Row>
  </div>
);
export default Goal;

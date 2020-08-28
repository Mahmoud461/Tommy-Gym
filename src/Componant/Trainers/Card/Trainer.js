import React from "react";
import classes from "./Trainer.module.css";
import { Card, Image } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Trainer = (props) => {
  let img = props.img;
  return (
    <Card className={classes.card}>
      <Image fluid variant="top" className={classes.CardImg} src={img} />
      <Card.Body>
        <h3>{props.name}</h3>
        <h6>professional Trainer</h6>
        <p className={classes.CardP}>
          As the founder of Festive Fitness & Wellness in West Philadelphia,
          Mike Watkins is serving up body positivity, fitness tips, and posts
          that are sure to make you smile.
        </p>
        <div>
          <FiFacebook className={classes.Icon} />
          <FiTwitter className={classes.Icon} />
          <AiOutlineInstagram className={classes.Icon} />
        </div>
      </Card.Body>
    </Card>
  );
};
export default Trainer;

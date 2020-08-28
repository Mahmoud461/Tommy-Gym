import React from "react";
// import classes from "./Header.module.css";
import NavBar from "../Navbar/NavBar";
import Slide from "react-reveal/Slide";
import classes from "./Header.module.css";
import Flip from "react-reveal/Flip";
const Header = () => (
  <div className={classes.ContainerDiv} id="home">
    <NavBar />
    <div className={classes.headerDiv}>
      <Slide left>
        <h1 className={classes.headerH1}>No Pain No Gain</h1>
      </Slide>
      <Slide right>
        <p>motivation is what gets you started habit keeps you going</p>
      </Slide>
      <Flip bottom>
        <button className={classes.headerBtn}>JOIN US TODAY</button>
      </Flip>
    </div>
  </div>
);
export default Header;

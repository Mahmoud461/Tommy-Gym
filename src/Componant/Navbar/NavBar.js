import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => (
  <div className={classes.navBar}>
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h1 className={classes.NavH1}>TOOMY GYM</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className={classes.togg}
        aria-controls="responsive-navbar-nav"
      >
        <GiHamburgerMenu className={classes.Menu} />{" "}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="signUp"
            className={classes.navItem}
            href="#features"
          >
            Sign Up
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Results"
            href="#features"
            className={classes.navItem}
            href="#pricing"
          >
            World Results
          </Link>

          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Facilities"
            href="#features"
            className={classes.navItem}
            href="#deets"
          >
            Facilities
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Trainers"
            href="#features"
            className={classes.navItem}
            eventKey={2}
            href="#memes"
          >
            Our Trainers
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default NavBar;

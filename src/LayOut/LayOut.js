import React, { Component } from "react";
// import classes from "./LayOut.module.css";
import Header from "../Componant/Header/Header";
import SignUp from "../Componant/SignUp/SignUp";
import Cards from "../Componant/Cards/Cards";
import People from "../Componant/People/People";
import Facilities from "../Componant/Facilities/Facilities";
import Clashing from "../Componant/Clashing/Clashing";
import Trainers from "../Componant/Trainers/Trainers";
import Goals from "../Componant/Goals/Goal";
import Info from "../Componant/Info/Info";
import Footer from "../Componant/Footer/Footer";
import classes from "./LayOut.module.css";
import ScrollToTop from "../Componant/ScrollToTop";

class LayOut extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Header />
        <SignUp />
        <Cards />
        <People />
        <Facilities />
        <Clashing />
        <Trainers />
        <Goals />
        <Info />
        <Footer />
      </div>
    );
  }
}
export default LayOut;

import React from "react";
import Header from "../header/header";
import DesktopImage from "../../images/image-hero-desktop.jpg";
import Bookmark from "../card-boomark/card-bookmark";
import Achievment from "../achievment/achievment";
import About from "../About/about";

const Main = () => {
  return (
    <div className="main absolute font-commissioner">
      <img src={DesktopImage} alt="" />
      <Header />
      <Bookmark />
      <Achievment />
      <About />
    </div>
  );
};

export default Main;

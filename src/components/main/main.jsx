import React, { useState } from "react";
import Header from "../header/header";
import Bookmark from "../card-boomark/card-bookmark";
import Achievment from "../achievment/achievment";
import About from "../About/about";
import Modal from "../modals/modal";

const Main = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((previousState) => !previousState);
  };

  return (
    <div className="main absolute font-commissioner">
      <div className="background md:h-96 md:bg-desktop bg-fixed bg-mobile"></div>
      <Header />
      <Bookmark val={modal} modal={handleModal} />
      <Achievment val={modal} />
      <About val={modal} />
      <Modal val={modal} modal={handleModal} />
    </div>
  );
};

export default Main;

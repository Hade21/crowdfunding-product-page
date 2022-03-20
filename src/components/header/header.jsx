import React from "react";
import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="header relative md:-top-80 flex justify-between w-screen md:px-36">
      <div className="left">
        <img src={Logo} alt="" />
      </div>
      <div className="right">
        <ul className="flex justify-around gap-6 text-white cursor-pointer">
          <li className="hover:underline">About</li>
          <li className="hover:underline">Discover</li>
          <li className="hover:underline">Get Started</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

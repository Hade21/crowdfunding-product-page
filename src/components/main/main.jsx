import React from "react";
import Header from "../header/header";

export default class Main extends React.Component() {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <Header />
      </div>
    );
  }
}

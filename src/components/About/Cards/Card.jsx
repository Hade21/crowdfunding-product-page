import React from "react";

const Cards = (props) => {
  return (
    <div
      className={
        props.select > 0
          ? "card border-2 border-slate-300 rounded-xl p-8"
          : "card border-2 border-slate-300 rounded-xl p-8 opacity-50"
      }
    >
      <div className="title flex justify-between">
        <h1 className="text-black-custom text-xl font-bold">{props.title}</h1>
        <p className="text-moderate-cyan text-base font-medium">
          Pledge ${props.pledge} or more
        </p>
      </div>
      <div className="desc my-4">
        <p className="text-dark-grey text-base">{props.desc}</p>
      </div>
      <div className="selection flex justify-between items-center">
        <h1 className="font-bold text-3xl items-center flex gap-2">
          {props.select}
          <span className="text-base font-normal text-dark-grey">left</span>
        </h1>
        <button
          className={
            props.select > 0
              ? "px-8 py-4 bg-moderate-cyan text-white font-bold rounded-full text-sm hover:bg-dark-cyan"
              : "px-8 py-4 bg-dark-grey text-white font-bold text-sm rounded-full"
          }
        >
          {props.select > 0 ? "Select Reward" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default Cards;

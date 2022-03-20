import React from "react";

const Achievment = () => {
  return (
    <div className="achievment bg-white shadow-sm shadow-slate-200 w-1/2 mx-auto rounded-lg relative -top-16">
      <div className="stats flex justify-between gap-6 text-left p-8">
        <div className="first w-1/3">
          <h1 className="font-bold text-black-custom text-xl">$89,914</h1>
          <p className="text-dark-grey text-sm">of $100,000 backed</p>
        </div>
        <div className="strip w-px bg-slate-300 rounded-full"></div>
        <div className="second w-1/3">
          <h1 className="font-bold text-black-custom text-xl">5,007</h1>
          <p className="text-dark-grey text-sm">total backers</p>
        </div>
        <div className="strip w-px bg-slate-300 rounded-full"></div>
        <div className="third w-1/3">
          <h1 className="font-bold text-black-custom text-xl">56</h1>
          <p className="text-dark-grey text-sm">days left</p>
        </div>
      </div>
      <div className="bar p-8">
        <div className="container bg-slate-200 rounded-full h-2">
          <div className="value w-[84.914%] bg-moderate-cyan rounded-full h-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Achievment;

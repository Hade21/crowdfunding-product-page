import React from "react";

const ModalCard = (props) => {
  return (
    <div className="card rounded-lg border-2 border-slate-200">
      <div className="selection flex gap-4 p-6">
        <input type="radio" className="text-slate-200 self-center" />
        <div className="text">
          <div className="title flex justify-between">
            <div className="left font-bold mb-3 flex gap-8 justify-between">
              <h1>{props.title}</h1>
              {props.pledge === undefined ? null : (
                <p className="text-moderate-cyan">
                  Pledge ${props.pledge} or more
                </p>
              )}
            </div>
            {props.stock > 0 ? (
              <div className="right w-fit flex gap-2 items-center">
                <h1 className="font-bold text-xl">{props.stock}</h1>
                <p className="text-slate-200">left</p>
              </div>
            ) : null}
          </div>
          <p className="text-left">{props.desc}</p>
        </div>
      </div>
      <div className="pledge border-slate-200 border-t-2 p-6 flex justify-between">
        {props.pledge > 0 ? (
          <input
            type="text"
            placeholder="Enter your pledge"
            className="focus:outline-none"
          />
        ) : (
          <div></div>
        )}
        <div className="button flex gap-4">
          {props.pledge > 0 ? (
            <button className="rounded-full border-2 border-slate-200 px-8 py-3 flex gap-3">
              $<span className="font-bold">{props.pledge}</span>
            </button>
          ) : (
            <div></div>
          )}
          <button className="rounded-full px-8 py-3 bg-moderate-cyan text-white font-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;

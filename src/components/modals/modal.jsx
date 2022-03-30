import React from "react";
import items from "./items";
import ModalCard from "./modal-card/modal-card";
import IconClose from "../../images/icon-close-modal.svg";

const Modal = (props) => {
  return (
    <div
      className={
        props.val
          ? "modal w-1/2 mx-auto rounded-lg p-8 relative -top-[1645px] z-10 bg-white transition-transform"
          : "hidden"
      }
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="title-container text-left mb-8">
            <div className="modal-title font-commissioner font-bold text-2xl mb-4">
              Back this project
            </div>
            <div className="modal-desc font-commissioner text-base">
              Want to support us to bringing Mastercraft Bamboo Riser out in the
              world?
            </div>
          </div>
          <img
            src={IconClose}
            alt=""
            className="icon relative -top-28 left-full cursor-pointer"
            onClick={props.modal}
          />
        </div>
        <div className="modal-body flex gap-4 flex-col">
          {items.map((item) => {
            return (
              <ModalCard
                title={item.title}
                pledge={item.pledge}
                stock={item.stock}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;

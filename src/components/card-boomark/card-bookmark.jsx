import React, { useState } from "react";
import Logo from "../../images/logo-mastercraft.svg";
import { ReactComponent as IconBookmark } from "../../images/icon-bookmark.svg";

const Bookmark = (props) => {
  const [val, setVal] = useState(false);

  const handleClick = () => setVal((prevState) => !prevState);

  return (
    <div className="card bg-white shadow-sm shadow-slate-200 w-1/2 mx-auto rounded-lg relative -top-24">
      <img
        src={Logo}
        alt=""
        className="relative -top-7 left-[calc(50%-28px)]"
      />
      <h1 className="font-extrabold text-2xl mb-3">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="font-normal text-base text-slate-400">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="buttons mt-10 flex justify-between px-14 pb-10">
        <div className="back">
          <button
            className="px-10 py-4 bg-moderate-cyan rounded-full text-white hover:bg-dark-cyan"
            onClick={props.modal}
          >
            Back this Project
          </button>
        </div>
        <div className={val ? "text-dark-cyan" : "text-dark-grey"}>
          <button
            className="flex justify-center items-center gap-4 font-bold bg-gray-200 rounded-full pr-10 hover:text-slate-700"
            onClick={handleClick}
          >
            <IconBookmark />
            {val ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;

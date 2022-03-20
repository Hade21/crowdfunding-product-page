import React from "react";
import Items from "./items.js";
import Cards from "./Cards/Card";

const About = () => {
  return (
    <div className="card bg-white shadow-sm shadow-slate-300 w-1/2 mx-auto rounded-lg relative -top-8 text-left p-10">
      <h1 className="font-bold text-xl mb-4">About this project</h1>
      <p className="text-dark-grey text-base">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <br />
      <p className="text-dark-grey text-base">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="container mt-6 grid gap-4">
        {Items.map((item) => {
          return (
            <Cards
              title={item.title}
              pledge={item.pledge}
              desc={item.desc}
              select={item.select}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;

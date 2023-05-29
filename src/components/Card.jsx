import React, { useState } from "react";
import IconsComponent from "./IconsComponent";
import logo from "../assets/logo.svg";

function Card() {
  const [cards, setCards] = useState([...IconsComponent, ...IconsComponent]);

  return (
    <div className="bg-bgColorLight min-h-screen">
      <div className="flex p-3 justify-between items-center">
        <img className="w-24 h-8" src={logo} alt="logo" />
        <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
          Menu
        </button>
      </div>
      <div className="w-92 pl-3 pr-3 pt-28 flex gap-3 justify-center flex-wrap">
        {cards.map((card, index) => (
          <div key={index} className="w-16 h-16 rounded-full bg-bgColorDark">
            <img
              className="w-10 h-10 m-3 flex justify-center align-middle "
              src={card}
              alt=""
            />
          </div>
        ))}
        <div className="flex justify-center gap-6 pt-24">
          <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
            <p className="text-textColorGrey">Time</p>
            <p>1:53</p>
          </div>
          <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
            <p className="text-textColorGrey">Moves</p>
            <p>39</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

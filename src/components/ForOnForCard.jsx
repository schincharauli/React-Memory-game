import React from "react";
import logo from "../assets/logo.svg";
import anchor from "../assets/icons/anchor.svg";
import astronaut from "../assets/icons/astronaut.svg";
import ghost from "../assets/icons/ghost.svg";
import hippo from "../assets/icons/hippo.svg";
import lemon from "../assets/icons/lemon.svg";
import plane from "../assets/icons/plane.svg";
import robot from "../assets/icons/robot.svg";
import snow from "../assets/icons/snow.svg";

function ForOnForCard() {
  return (
    <div className="bg-bgColorLight min-h-screen">
      <div className="flex p-3 justify-between items-center">
        <img className=" w-24 h-8" src={logo} alt="logo" />

        <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
          Menu
        </button>
      </div>
    </div>
  );
}

export default ForOnForCard;

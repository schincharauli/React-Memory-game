import React, { useState, useEffect } from "react";
import StarterPage from "./StarterPage";
import logo from "../assets/logo.svg";
import anchor from "../assets/icons/anchor.svg";
import astronaut from "../assets/icons/astronaut.svg";
import ghost from "../assets/icons/ghost.svg";
import hippo from "../assets/icons/hippo.svg";
import lemon from "../assets/icons/lemon.svg";
import plane from "../assets/icons/plane.svg";
import robot from "../assets/icons/robot.svg";
import snow from "../assets/icons/snow.svg";
import poo from "../assets/icons/poo.svg";
import umbrella from "../assets/icons/umbrella.svg";
import earth from "../assets/icons/earth.svg";
import incognito from "../assets/icons/incognito.svg";
import rocket from "../assets/icons/rocket.svg";
import fly from "../assets/icons/fly.svg";
import snowman from "../assets/icons/snowman.svg";
import rainbow from "../assets/icons/rainbow.svg";
import meteor from "../assets/icons/meteor.svg";
import star from "../assets/icons/star.svg";
import { useLocation } from "react-router-dom";
import { values } from "lodash";

function Card(props) {
  const location = useLocation();
  const choosenType = location.state.selectedType;
  const choosenPlayer = location.state.selectedPlayer;
  const choosenGrid = location.state.selectedGridSize;
  const size = choosenGrid ** 2;
  const forByforValue = props.gridHandler;
  const forByFor = Array.from(Array(size / 2).keys());

  const mainArray = [...forByFor, ...forByFor];
  const icons = [
    anchor,
    astronaut,
    ghost,
    hippo,
    lemon,
    plane,
    robot,
    snow,
    star,
    poo,
    umbrella,
    earth,
    incognito,
    rocket,
    fly,
    snowman,
    rainbow,
    meteor,
  ];

  const shuffledFor = mainArray.sort((a, b) => 0.5 - Math.random());
  const generate = () => {
    return mainArray.map((number, index) => {
      return {
        value: icons[number],
        id: index,
        clicked: false,
        matched: false,
      };
    });
  };

  const [rotate, setRotate] = useState(generate());

  const rotateHandler = (rotatedObjects) => {
    const matchHandler = (match) => match.clicked;
    const response = rotate.find(matchHandler);
    if (response && response.value === rotatedObjects.value) {
      const updatedRotate = [...rotate].map((card) => {
        if (card.id === rotatedObjects.id || card.id === response.id) {
          return { ...card, matched: true, clicked: false };
        }
        return card;
      });
      return setRotate(updatedRotate);
    }

    const updatedRotate = [...rotate].map((card) => {
      if (card.id === rotatedObjects.id) {
        return { ...card, clicked: true };
      }
      return card;
    });

    setRotate(updatedRotate);
    console.log("clicked");
  };

  // console.log(rotate);
  return (
    <div className="bg-bgColorLight min-h-screen">
      <div className="flex p-6 justify-between items-center">
        <img className="w-24 h-8" src={logo} alt="logo" />
        <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
          Menu
        </button>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 gap-2 pt-28">
        {rotate.map((icons, index) => (
          <div className="flex justify-center items-center" key={index}>
            <button
              className={`w-16 h-16 rounded-full p-3 bg-bgColorDark`}
              disabled={icons.clicked || icons.matched}
              onClick={() => {
                rotateHandler(icons);
              }}
            >
              <img
                src={icons.value}
                className={` w-10 h-10 p-2 ${
                  icons.clicked || icons.matched ? "block" : "hidden"
                }`}
              />
            </button>
          </div>
        ))}

        <div className="flex justify-center gap-6 pt-24 pl-24">
          <div className="w-48 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
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

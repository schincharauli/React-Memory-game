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
import Modal from "./Modal";
import FinalModal from "./FinalModal";
import MultiPlayer from "./MultiPlayer";

function Card(props) {
  const location = useLocation();
  const choosenType = location.state.selectedType;
  // console.log(choosenType);
  const choosenPlayer = location.state.selectedPlayer;
  const choosenGrid = location.state.selectedGridSize;
  const size = choosenGrid ** 2;
  const forByforValue = props.gridHandler;
  const forByFor = Array.from(Array(size / 2).keys());

  const [currentPlayer, setCurrentPlayer] = useState(1);

  // modal states
  const [openModal, setOpenModal] = useState(false);

  //finamodal state
  const [endGame, setEndGame] = useState(false);

  // clickCounter
  const [clickCount, setClickCount] = useState(0);

  // function for clickCounter
  const clickCounterHandler = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
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

  // stopwatch
  const [time, setTime] = useState(0);
  const [process, setProcess] = useState(true);
  useEffect(() => {
    let interval;
    if (process) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!process) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [process]);

  // shuffled card for by for
  const shuffledFor = mainArray.sort((a, b) => 0.5 - Math.random());

  // main function to generate the cards
  const generate = () => {
    return mainArray.map((number, index) => {
      return {
        value: choosenType === "number" ? number : icons[number],
        id: index,
        clicked: false,
        matched: false,
      };
    });
  };

  const [rotate, setRotate] = useState(generate());
  // rotation function
  const rotateHandler = (rotatedObjects, scoreIncrease = null) => {
    const matchHandler = (match) => match.clicked;
    const response = rotate.find(matchHandler);
    if (response && response.value === rotatedObjects.value) {
      const updatedRotate = [...rotate].map((card) => {
        if (card.id === rotatedObjects.id || card.id === response.id) {
          return { ...card, matched: true, clicked: false };
        }
        return card;
      });
      setTimeout(() => {
        if (scoreIncrease) {
          scoreIncrease(updatedRotate);
        }
        setRotate(updatedRotate);
      }, 1000);

      return;
    }

    const updatedRotate = [...rotate].map((card) => {
      if (card.id === rotatedObjects.id) {
        return { ...card, clicked: true };
      }
      return card;
    });

    setRotate(updatedRotate);

    if (response) {
      setTimeout(() => {
        const updatedRotate = [...rotate].map((card) => {
          if (card.id === rotatedObjects.id || card.id === response.id) {
            return { ...card, clicked: false };
          }
          return card;
        });
        if (scoreIncrease) {
          scoreIncrease(updatedRotate);
        }
        setRotate(updatedRotate);
      }, 1000);
    }
  };

  // new game handler
  const newGameHandler = () => {
    setTime(0);
    setProcess(true);
    setClickCount(0);
    setRotate(generate());
  };

  const gameIsOver = rotate.every((obj) => obj.matched);
  return (
    <div className="bg-bgColorLight min-h-screen">
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          newGameHandler={newGameHandler}
        />
      )}
      {choosenPlayer !== 1 ? (
        <MultiPlayer
          openModal={openModal}
          setOpenModal={setOpenModal}
          newGameHandler={newGameHandler}
          rotate={rotate}
          generate={generate}
          choosenType={choosenType}
          setRotate={setRotate}
          rotateHandler={rotateHandler}
          clickCounterHandler={clickCounterHandler}
          choosenPlayer={choosenPlayer}
          gameIsOver={gameIsOver}
          choosenGrid={choosenGrid}
        />
      ) : (
        <div>
          <div className="flex p-6 justify-between items-center">
            <img className="w-24 h-6" src={logo} alt="logo" />
            <button
              className="w-20 h-10 rounded-full bg-yellow text-textColorWhite"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Menu
            </button>
          </div>
          <div className="flex justify-center">
            <div
              className={` max-w-xl  ${
                choosenGrid === 6
                  ? "grid grid-cols-6 grid-rows-4 gap-1 pt-28"
                  : "grid grid-cols-4 grid-rows-4 gap-1 pt-28"
              }`}
            >
              {rotate.map((icons, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <button
                    className={` ${
                      choosenGrid === 6
                        ? "w-12 h-12 p-1 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30 "
                        : "w-12 h-12 p-1 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
                    }  rounded-full   bg-bgColorDark ${
                      icons.clicked
                        ? "bg-yellow"
                        : icons.matched
                        ? "bg-guessedButtonColor "
                        : "bg-bgColorDark"
                    }
             
            `}
                    disabled={icons.clicked || icons.matched}
                    onClick={() => {
                      clickCounterHandler();
                      rotateHandler(icons);
                    }}
                  >
                    {choosenType !== "number" ? (
                      <img
                        src={icons.value}
                        className={` w-16 h-16 md:w-16 md:h-16 lg:w-20 lg:h-20  p-3 ${
                          icons.clicked || icons.matched ? "block" : "hidden"
                        }`}
                      />
                    ) : (
                      <span
                        className={`text-lg sm:text-2xl md:text-4xl lg:text-6xl font-myFont font-bold text-textColorWhite  ${
                          icons.clicked || icons.matched ? "block" : "hidden"
                        }`}
                      >
                        {icons.value}
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-12 pb-12 gap-4">
            <div className=" w-32 sm:w-44 md:w-48 lg:w-52 xl:w-60 sm:flex h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
              <p className="text-textColorGrey font-myFont font-bold">Time</p>
              <div className="text-coveredButtonColor">
                <span className="font-myFont font-bold">
                  {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="font-myFont font-bold">
                  {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
              </div>
            </div>
            <div className="w-32 sm:w-44 md:w-48 lg:w-52 xl:w-60 bg-outlineColor rounded-md flex flex-col justify-center text-center">
              <p className="text-textColorGrey font-myFont font-bold">Moves</p>
              <p className="text-coveredButtonColor font-myFont font-bold ">
                {clickCount}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Card;

import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Modal from "./Modal";
import MultiplayerModal from "./MultiplayerModal";

function MultiPlayer({
  openModal,
  setOpenModal,
  newGameHandler,
  rotate,
  choosenType,
  rotateHandler,
  clickCounterHandler,
  choosenPlayer,
  gameIsOver,
  choosenGrid,
}) {
  const playersMaker = () => {
    const initialState = {};

    for (let index = 0; index < choosenPlayer; index++) {
      initialState["player" + (index + 1)] = 0;
    }
    return initialState;
  };

  const [stats, setStats] = useState(playersMaker());

  const [currentPlayer, setCurrentPlayer] = useState(1);

  const scoreIncrease = (updatedRotate) => {
    const scoreCounter = updatedRotate.filter((value) => value.matched).length;
    const totalScore = scoreCounter / 2;

    const playersScore = Object.values(stats);

    const sum = playersScore.reduce((partialSum, a) => partialSum + a, 0);

    if (totalScore > sum) {
      const copy = { ...stats };
      copy["player" + currentPlayer] = copy["player" + currentPlayer] + 1;
      setStats({ ...copy });
    } else {
      const newCurrentPlayer =
        currentPlayer + 1 > choosenPlayer ? 1 : currentPlayer + 1;
      setCurrentPlayer(newCurrentPlayer);
      console.log(newCurrentPlayer);
    }
  };

  return (
    <div>
      <div>
        {openModal && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            newGameHandler={newGameHandler}
          />
        )}
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
      </div>
      {gameIsOver && (
        <MultiplayerModal
          stats={stats}
          currentPlayer={currentPlayer}
          newGameHandler={newGameHandler}
        />
      )}

      {/* <MultiplayerModal
        stats={stats}
        currentPlayer={currentPlayer}
        newGameHandler={newGameHandler}
      /> */}
      <div className="flex justify-center">
        <div
          className={` max-w-xl  ${
            choosenGrid === 6
              ? "grid grid-cols-6 grid-rows-4 gap-1 pt-20"
              : "grid grid-cols-4 grid-rows-4 gap-1 pt-20"
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
                  rotateHandler(icons, scoreIncrease);
                }}
              >
                {choosenType !== "number" ? (
                  <img
                    src={icons.value}
                    className={`w-12 h-12 pl-2 pr-2 pb-2 sm:w-16 sm:h-16 sm:pl-4 sm:pr-2 md:w-20 md:h-20 lg:w-20 lg:h-20 sm:p-2 md:p-4 lg:p-4 ${
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
      <div className="flex justify-center pt-10 ">
        <div className="flex">
          {Object.keys(stats).map((element, index) => (
            <div
              className={`font-myFont font-bold text-bgColorDark ${
                choosenPlayer === 2 ? "w-24 sm:w-36 md:w-44" : ""
              }
              ${choosenPlayer === 3 ? "w-18 sm:w-36 md:w-44" : ""} 
              ${
                choosenPlayer === 4 ? "w-16 sm:w-24 md:w-32 mb-12" : ""
              } h-20  rounded-md  text-center p-6 m-3 flex  ${
                currentPlayer === index + 1
                  ? "bg-yellow text-textColorWhite"
                  : "bg-outlineColor"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-textColorGrey">P{index + 1}</span>
                <span>{stats[element]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;

import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Modal from "./Modal";

function MultiPlayer({
  openModal,
  setOpenModal,
  newGameHandler,
  rotate,
  choosenType,
  rotateHandler,
  clickCounterHandler,
}) {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const players = ["Player 1", "Player 2"];

  const currentPlayerHandler = () => {
    setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
  };

  const [increaseScore, setIncreaseScore] = useState(1);

  const scoreIncreaseHandler = () => {
    setIncreaseScore((prevScore) => prevScore + 1);
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
      <div className="grid grid-cols-4 grid-rows-4 gap-2 pt-28">
        {rotate.map((icons, index) => (
          <div className="flex justify-center items-center" key={index}>
            <button
              className={`w-16 h-16 rounded-full p-3 bg-bgColorDark ${
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
                currentPlayerHandler();
                scoreIncreaseHandler();
              }}
            >
              {choosenType !== "number" ? (
                <img
                  src={icons.value}
                  className={` w-10 h-10 p-2 ${
                    icons.clicked || icons.matched ? "block" : "hidden"
                  }`}
                />
              ) : (
                <span
                  className={` w-10 h-10 p-2 ${
                    icons.clicked || icons.matched ? "block" : "hidden"
                  }`}
                >
                  {icons.value}
                </span>
              )}
            </button>
          </div>
        ))}
        <div className="flex m-4 pt-4 w-80 gap-4">
          <div
            className={`w-40 h-20  rounded-md flex flex-col justify-center text-center ${
              currentPlayer === 0 ? "bg-yellow" : "bg-outlineColor"
            }`}
          >
            <span>P1{currentPlayer[0]}</span>
            <span>{increaseScore}</span>
          </div>
          <div
            className={`w-40 h-20  rounded-md flex flex-col justify-center text-center ${
              currentPlayer === 1 ? "bg-yellow" : "bg-outlineColor"
            }`}
          >
            <span>P2{currentPlayer[1]}</span>
            <span>{increaseScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;

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
  choosenPlayer,
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

  const scoreIncrease = () => {
    const scoreCounter = rotate.filter((value) => value.matched).length;
    const totalScore = scoreCounter / 2;
    const copy = { ...stats };
    copy["player" + currentPlayer] = copy["player" + currentPlayer] + 1;
    setStats(copy);
  };

  // console.log(scoreCounter);

  //   console.log(stats);
  //   console.log(currentPlayer);

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
                  className={` w-10 h-10 p-2  ${
                    icons.clicked || icons.matched ? "block" : "hidden"
                  }`}
                >
                  {icons.value}
                </span>
              )}
            </button>
          </div>
        ))}

        <div className="flex m-4 pt-4">
          <div className="flex">
            {Object.keys(stats).map((element, index) => (
              <div
                className={`h-20 rounded-md  text-center p-6 m-3 flex items-center ${
                  "" ? "bg-yellow" : "bg-outlineColor"
                }`}
              >
                <div className="flex flex-col">
                  <span>P{index + 1}</span>
                  <span>{stats[element]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;

import React from "react";
import logo from "../assets/logo.svg";
import Modal from "./Modal";

function MultiPlayer({
  openModal,
  setOpenModal,
  newGameHandler,
  rotate,
  generate,
  choosenType,
}) {
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
        <div className="flex m-12 pt-4 w-72 gap-2">
          <div className="w-52 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default MultiPlayer;

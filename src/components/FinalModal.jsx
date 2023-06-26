import React from "react";
import { useNavigate } from "react-router-dom";

function FinalModal({ endGame, setEndGame, newGameHandler, time, clickCount }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black bg-opacity-50 absolute w-full h-full">
        <div className="w-80 h-auto rounded-xl bg-bgColorLight relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className=" text-bgColorDark text-2xl text-center pt-4">
            You did it!
          </h1>
          <p className="text-textColorGrey font-weight: 900 text-center pt-6">
            Game over! Here’s how you got on…
          </p>
          <div className="flex flex-col items-center pt-6">
            <div className="bg-outlineColor flex justify-between pl-4 pr-4 w-64 h-12 items-center ">
              <span className="text-textColorGrey ">Time Elapsed</span>
              <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </div>
            <div className="bg-outlineColor flex justify-between pl-4 pr-4 w-64 mt-4 h-12 items-center">
              <span className="text-textColorGrey ">Moves Taken</span>
              <span>{clickCount} Moves</span>
            </div>
          </div>
          <div className="pt-1 flex justify-center items-center flex-col">
            <button
              className="h-12 w-64 bg-yellow rounded-full text-textColorWhite mt-4  md:w-80 flex justify-center items-center"
              onClick={() => {
                newGameHandler();
              }}
            >
              Restart
            </button>
            <button
              className="h-12 w-64 bg-outlineColor rounded-full text-coveredButtonColor mt-4  md:w-80 flex justify-center items-center mb-8"
              onClick={() => {
                navigate("/");
              }}
            >
              Setup New Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalModal;

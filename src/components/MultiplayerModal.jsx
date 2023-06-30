import React from "react";
import { useNavigate } from "react-router-dom";

function MultiplayerModal({
  clickCount,
  stats,
  currentPlayer,
  newGameHandler,
}) {
  const navigate = useNavigate();
  const highestValue = Math.max(...Object.values(stats));
  return (
    <>
      <div className="bg-black bg-opacity-50 absolute w-full h-full">
        <div className="w-80 md:w-1/2 lg:w-1/3 h-auto rounded-xl bg-bgColorLight relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p">
          <h1 className=" text-bgColorDark text-2xl text-center pt-6 font-myFont font-bold">
            You did it!
          </h1>
          <p className="text-textColorGrey font-weight: 900 text-center pt-6 font-myFont font-bold">
            Game over! Here are the results…
          </p>
          <div className="flex flex-col items-center pt-6 font-myFont font-bold">
            <div className="">
              {Object.keys(stats).map((element, index) => {
                let highestValueButton =
                  currentPlayer === index + 1
                    ? "bg-coveredButtonColor"
                    : "bg-outlineColor";

                if (stats[element] === highestValue) {
                  highestValueButton = "bg-coveredButtonColor";
                }

                return (
                  <div
                    className={`w-64 md:w-80 h-auto rounded-md p-3 m-3 ${
                      currentPlayer === index + 1
                        ? "bg-coveredButtonColor"
                        : "bg-outlineColor"
                    } ${highestValueButton}`}
                  >
                    <div className="flex">
                      <div className="flex justify-around">
                        <div
                          className={`flex  text-textColorGrey ${
                            stats[element] === highestValue
                              ? "text-textColorWhite"
                              : "text-textColorGrey"
                          }`}
                        >
                          <span className="flex items-center">
                            P{index + 1}
                            {stats[element] === highestValue && (
                              <span className="ml-1">(Winner!)</span>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <span
                          className={`flex ${
                            stats[element] === highestValue
                              ? "text-textColorWhite"
                              : "text-textColorGrey"
                          }`}
                        >
                          {stats[element]} Pairs
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-1 flex justify-center items-center flex-col">
            <button
              className="h-12 w-64 bg-yellow rounded-full text-textColorWhite mt-4  md:w-80 flex justify-center items-center font-myFont font-bold"
              onClick={() => {
                newGameHandler();
              }}
            >
              Restart
            </button>
            <button
              className="h-12 w-64 bg-outlineColor rounded-full text-coveredButtonColor mt-4  md:w-80 flex justify-center items-center mb-8 font-myFont font-bold"
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

export default MultiplayerModal;

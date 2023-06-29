import React, { useState } from "react";
import Card from "./Card";
import logoWhite from "../assets/logo-white.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function StarterPage(props) {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("number");

  const [selectedPlayer, setSelectedPlayer] = useState(1);
  const [selectedGridSize, setSelectedGridSize] = useState(4);

  const typeHandler = (type) => {
    setSelectedType(type);
  };
  const playerHandler = (player) => {
    setSelectedPlayer(player);
  };
  const gridHandler = (grid) => {
    setSelectedGridSize(grid);
  };

  return (
    <div className="min-h-screen flex justify-center bg-bgColorDark flex-col">
      <header className="flex items-center justify-center">
        <img
          className="pt-12 flex justify-center text-center"
          src={logoWhite}
          alt=""
        />
      </header>

      <section className="pt-12 flex justify-center">
        <div className="w-80 md:w-auto  h-auto bg-bgColorLight ml-6 mr-6 rounded-lg pl-4 pr-4 md:px-8">
          <div className="w-full">
            <p className="pl-3 text-textColorGrey font-semibold pt-3">
              Select Theme
            </p>
            <div className="text-textColorWhite flex justify-between pt-2 gap-1">
              <button
                className={`h-10 w-32 md:w-44  lg:w-48 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                  selectedType === "number"
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  typeHandler("number");
                }}
              >
                Numbers
              </button>

              <button
                className={`h-10 w-32 md:w-44 lg:w-48  rounded-full pl-4 pr-4 pt-2 pb-2 ${
                  selectedType === "icon"
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  typeHandler("icon");
                }}
              >
                Icons
              </button>
            </div>
            <p className="text-textColorGrey font-semibold pt-3">
              Numbers of Players
            </p>

            <div className="text-textColorWhite flex justify-between pt-2 ">
              <button
                className={`h-8 w-16 md:w-18 lg:w-20 rounded-full ${
                  selectedPlayer === 1
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  playerHandler(1);
                }}
              >
                1
              </button>
              <button
                className={`h-8 w-16 md:w-18 lg:w-20 rounded-full ${
                  selectedPlayer === 2
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  playerHandler(2);
                }}
              >
                2
              </button>
              <button
                className={`h-8 w-16 md:w-18 lg:w-20 rounded-full ${
                  selectedPlayer === 3
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  playerHandler(3);
                }}
              >
                3
              </button>
              <button
                className={`h-8 w-16 md:w-18 lg:w-20 rounded-full ${
                  selectedPlayer === 4
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                } `}
                onClick={() => {
                  playerHandler(4);
                }}
              >
                4
              </button>
            </div>
            <p className="text-textColorGrey font-semibold pt-3">Grid Size</p>

            <div className="text-textColorWhite flex justify-between pt-2">
              <button
                className={`h-10 w-32 md:w-40 lg:w-40 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                  selectedGridSize === 4
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  gridHandler(4);
                }}
              >
                4x4
              </button>
              <button
                className={`h-10 w-32 md:w-40 lg:w-40  rounded-full pl-4 pr-4 pt-2 pb-2 ${
                  selectedGridSize === 6
                    ? "bg-coveredButtonColor"
                    : "bg-guessedButtonColor"
                }`}
                onClick={() => {
                  gridHandler(6);
                }}
              >
                6x6
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/cards", {
                    state: { selectedType, selectedPlayer, selectedGridSize },
                  });
                }}
                className="h-12 w-72 bg-yellow rounded-full text-textColorWhite mt-12 mb-6 md:w-80 flex justify-center items-center"
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

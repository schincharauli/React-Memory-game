import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import logoWhite from "../assets/logo-white.svg";

export default function StarterPage() {
  const history = useHistory();

  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState(null);
  const [selectedGridSize, setSelectedGridSize] = useState(null);

  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };

  const handlePlayersClick = (players) => {
    setSelectedPlayers(players);
  };

  const handleGridSizeClick = (gridSize) => {
    setSelectedGridSize(gridSize);
  };

  const handleStartGame = () => {
    // Check if all required options are selected
    if (selectedTheme && selectedPlayers && selectedGridSize) {
      // Navigate to the cards component page
      history.push("/cards");
    }
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
        <div className="w-80 h-auto bg-bgColorLight ml-6 mr-6 rounded-lg pl-4 pr-4 md:w-96 md: md:px-8">
          <p className="pl-3 text-textColorGrey font-semibold pt-3">
            Select Theme
          </p>
          <div className="text-textColorWhite flex justify-between pt-2">
            <button
              className={`h-10 w-32 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                selectedTheme === "numbers"
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handleThemeClick("numbers")}
            >
              Numbers
            </button>
            <button
              className={`h-10 w-32 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                selectedTheme === "icons"
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handleThemeClick("icons")}
            >
              Icons
            </button>
          </div>
          <p className="text-textColorGrey font-semibold pt-3">
            Numbers of Players
          </p>

          <div className="text-textColorWhite flex justify-between pt-2">
            <button
              className={`h-8 w-16 rounded-full ${
                selectedPlayers === 1
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handlePlayersClick(1)}
            >
              1
            </button>
            <button
              className={`h-8 w-16 rounded-full ${
                selectedPlayers === 2
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handlePlayersClick(2)}
            >
              2
            </button>
            <button
              className={`h-8 w-16 rounded-full ${
                selectedPlayers === 3
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handlePlayersClick(3)}
            >
              3
            </button>
            <button
              className={`h-8 w-16 rounded-full ${
                selectedPlayers === 4
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handlePlayersClick(4)}
            >
              4
            </button>
          </div>
          <p className="text-textColorGrey font-semibold pt-3">Grid Size</p>
          <div className="text-textColorWhite flex justify-between pt-2">
            <button
              className={`h-10 w-32 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                selectedGridSize === "4x4"
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handleGridSizeClick("4x4")}
            >
              4x4
            </button>
            <button
              className={`h-10 w-32 rounded-full pl-4 pr-4 pt-2 pb-2 ${
                selectedGridSize === "6x6"
                  ? "bg-coveredButtonColor"
                  : "bg-guessedButtonColor"
              }`}
              onClick={() => handleGridSizeClick("6x6")}
            >
              6x6
            </button>
          </div>
          <div className="flex justify-center">
            <button
              className="h-12 w-72 bg-yellow rounded-full text-textColorWhite mt-6 mb-6 md:w-80"
              onClick={handleStartGame}
            >
              Start Game
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

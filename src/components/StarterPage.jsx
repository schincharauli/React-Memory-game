import React, { useState } from "react";
import Card from "./Card";
import logoWhite from "../assets/logo-white.svg";

export default function StarterPage() {
  return (
    <div className="min-h-screen flex justify-center bg-bgColorDark flex-col">
      <header className="flex items-center justify-center">
        <img
          className="pt-12 flex justify-center text-center"
          src={logoWhite}
          alt=""
        />
      </header>

      <section className="pt-12 flex justify-center ">
        <div className="w-80 h-auto bg-bgColorLight ml-6 mr-6 rounded-lg pl-4 pr-4 md:w-96 md: md:px-8">
          <p className="pl-3 text-textColorGrey font-semibold pt-3">
            Select Theme
          </p>
          <div className="text-textColorWhite flex justify-between pt-2">
            <button className="h-10 w-32  rounded-full pl-4 pr-4 pt-2 pb-2 bg-guessedButtonColor ">
              Numbers
            </button>
            <button className="h-10 w-32 rounded-full pl-4 pr-4 pt-2 pb-2 bg-guessedButtonColor">
              Icons
            </button>
          </div>
          <p className="text-textColorGrey font-semibold pt-3">
            Numbers of Players
          </p>

          <div className="text-textColorWhite flex justify-between pt-2">
            <button className="h-8 w-16 rounded-full bg-guessedButtonColor">
              1
            </button>
            <button className="h-8 w-16 rounded-full bg-guessedButtonColor">
              2
            </button>
            <button className="h-8 w-16 rounded-full bg-guessedButtonColor">
              3
            </button>
            <button className="h-8 w-16 rounded-full bg-guessedButtonColor">
              4
            </button>
          </div>
          <p className="text-textColorGrey font-semibold pt-3">Grid Size</p>
          <div className="text-textColorWhite flex justify-between pt-2">
            <button className="h-10 w-32   rounded-full pl-4 pr-4 pt-2 pb-2 bg-guessedButtonColor ">
              4x4
            </button>
            <button className="h-10 w-32  rounded-full pl-4 pr-4 pt-2 pb-2 bg-guessedButtonColor">
              6x6
            </button>
          </div>
          <div className="flex justify-center">
            <button className="h-12 w-72 bg-yellow rounded-full text-textColorWhite mt-6 mb-6 md:w-80">
              Start Game
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

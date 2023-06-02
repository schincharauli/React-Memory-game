import React, { useState, useEffect } from "react";
import IconsComponent from "./IconsComponent";
import logo from "../assets/logo.svg";

function Card() {
  const [cards, setCards] = useState([...IconsComponent, ...IconsComponent]);
  const [isClicked, setIsclicked] = useState(false);
  const [buttonStates, setButtonStates] = useState([]);
  const [clickedCount, setClickedCount] = useState(0);

  const shuffleArray = (array) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  useEffect(() => {
    setCards(shuffleArray(cards));
  }, []);

  const rotateHandler = (index) => {
    setIsclicked(true);
    setButtonStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = true;
      return updatedStates;
    });
    setClickedCount((prevCount) => prevCount + 1);
    setClickedIcons((prevIcons) => {
      if (prevIcons.includes(index)) {
        return prevIcons;
      }
      const updatedIcons = [...prevIcons, index];
      if (updatedIcons.length === 2) {
        const [firstIcon, secondIcon] = updatedIcons;
        if (cards[firstIcon] === cards[secondIcon]) {
          setButtonStates((prevState) => {
            const updatedStates = [...prevState];
            updatedStates[firstIcon] = true;
            updatedStates[secondIcon] = true;
            return updatedStates;
          });
          return [];
        }
      }
      return updatedIcons;
    });
  };

  useEffect(() => {
    if (clickedCount === 3) {
      setButtonStates([]);
      setClickedCount(0);
    }
  }, [clickedCount]);

  return (
    <div className="bg-bgColorLight min-h-screen">
      <div className="flex p-3 justify-between items-center">
        <img className="w-24 h-8" src={logo} alt="logo" />
        <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
          Menu
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 pt-28">
        {cards.map((card, index) => (
          <div className="flex justify-center items-center">
            <div
              className={`z-${
                buttonStates[index] ? 10 : 20
              } relative w-16 h-16 rounded-full p-3 bg-${
                buttonStates[index] ? "yellow" : "bgColorDark"
              } `}
              onClick={() => rotateHandler(index)}
              key={index}
            ></div>
            <img className="absolute z-10 w-10 h-10 p-2" src={card} alt="" />
          </div>
        ))}
        <div className="flex justify-center gap-6 pt-24">
          <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
            <p className="text-textColorGrey">Time</p>
            <p>1:53</p>
          </div>
          <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
            <p className="text-textColorGrey">Moves</p>
            <p>39</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

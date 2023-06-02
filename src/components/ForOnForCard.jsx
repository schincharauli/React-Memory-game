import React from "react";
import logo from "../assets/logo.svg";
import anchor from "../assets/icons/anchor.svg";
import astronaut from "../assets/icons/astronaut.svg";
import ghost from "../assets/icons/ghost.svg";
import hippo from "../assets/icons/hippo.svg";
import lemon from "../assets/icons/lemon.svg";
import plane from "../assets/icons/plane.svg";
import robot from "../assets/icons/robot.svg";
import snow from "../assets/icons/snow.svg";

function ForOnForCard() {
  return (
    <div className="bg-bgColorLight min-h-screen">
      <div className="flex p-3 justify-between items-center">
        <img className=" w-24 h-8" src={logo} alt="logo" />

        <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
          Menu
        </button>
      </div>
    </div>
  );
}

export default ForOnForCard;

// import React, { useState } from "react";
// import IconsComponent from "./IconsComponent";
// import logo from "../assets/logo.svg";
// import { shuffle } from "lodash";

// function Card() {
//   const [cards, setCards] = useState(
//     shuffle([...IconsComponent, ...IconsComponent])
//   );

//   const [flippedCards, setFlippedCards] = useState([]);

//   const handleCardClick = (index) => {
//     if (!flippedCards.includes(index)) {
//       setFlippedCards([...flippedCards, index]);
//     }
//   };

//   return (
//     <div className="bg-bgColorLight min-h-screen">
//       <div className="flex p-3 justify-between items-center">
//         <img className="w-24 h-8" src={logo} alt="logo" />
//         <button className="w-20 h-10 rounded-full bg-yellow text-textColorWhite">
//           Menu
//         </button>
//       </div>
//       <div className="w-92 pl-3 pr-3 pt-28 flex gap-3 justify-center flex-wrap">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`w-16 h-16 rounded-full bg-bgColorDark flex justify-center items-center ${
//               flippedCards.includes(index) ? "invisible" : ""
//             }`}
//             onClick={() => handleCardClick(index)}
//           >
//             <div className="w-10 h-10 m-3 relative">
//               {/* <img className="w-full h-full absolute" src={card} alt="" /> */}
//             </div>
//           </div>
//         ))}
//         <div className="flex justify-center gap-6 pt-24">
//           <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
//             <p className="text-textColorGrey">Time</p>
//             <p>1:53</p>
//           </div>
//           <div className="w-36 h-20 bg-outlineColor rounded-md flex flex-col justify-center text-center">
//             <p className="text-textColorGrey">Moves</p>
//             <p>39</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

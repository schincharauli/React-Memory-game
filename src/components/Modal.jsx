import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ setOpenModal, newGameHandler }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black bg-opacity-50 absolute w-full h-full">
        <div className="w-80 md:w-1/2 lg:w-1/3 h-56 rounded-xl bg-bgColorLight relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="pt-1 flex justify-center items-center flex-col">
            <button
              className="h-12 w-64 bg-yellow rounded-full text-textColorWhite mt-4  md:w-80 flex justify-center items-center"
              onClick={() => {
                navigate("/");
              }}
            >
              Restart
            </button>
            <button
              className="h-12 w-64 bg-outlineColor rounded-full text-coveredButtonColor mt-4  md:w-80 flex justify-center items-center"
              onClick={() => {
                newGameHandler();
                setOpenModal(false);
              }}
            >
              New Game
            </button>

            <button
              className="h-12 w-64 bg-outlineColor rounded-full text-coveredButtonColor mt-4 md:w-80 flex justify-center items-center"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Resume Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

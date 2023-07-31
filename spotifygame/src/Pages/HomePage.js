import React from "react";
import ImdbLogo from "../images/imdblogo.png";
const HomePage = (props) => {
  const playHandler = () => {
    props.pageHandler("GamePage");
  };
  return (
    <div className="h-min-screen w-full bg-black flex flex-col justify-center items-center ">
      <div className="w-4/5 flex flex-col gap-3 h-1/3 justify-center">
        <img src={ImdbLogo} alt="logo" />
        <div className="text-white font-roboto text-4xl">GUESSER</div>
      </div>

      <div className="h-1/5 w-full flex justify-center items-center mt-3">
        <div
        onClick={playHandler}  className="text-black bg-[#F6C700] text-4xl border-2 border-black px-3 py-3 w-4/5  font-roboto  shadow-white shadow-[5px_5px_0_0] ">
          PLAY
        </div>
      </div>
      <div className="text-white font-roboto text-4xl h-1/5  w-4/5 border-white border-2 flex justify-center items-center px-2">
        {" "}
        Guess Which Movie is Better!
      </div>
    </div>
  );
};

export default HomePage;

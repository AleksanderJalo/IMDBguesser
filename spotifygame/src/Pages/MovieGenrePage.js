import React from "react";
import AnimationsImage from "../images/lion.svg";
import ClownImage from "../images/clown.svg";
import DramaImage from "../images/drama.svg";
import FantasyImage from "../images/fantasy.svg";
import HorrorImage from "../images/horror.svg";
import CrimeImage from "../images/crime.svg"; 
const MovieGenrePage = () => {
  return (
    <div className="h-min-screen w-full bg-black flex flex-col font-roboto ">
      <div className="h-1/4 flex justify-center items-center">
        <div className="text-white font-roboto border-2 border-white w-4/5 py-3 text-2xl">
          CHOOSE GENRE
        </div>
      </div>
      <div className="h-3/4 w-full flex flex-col text-white items-center justify-center  gap-12 mb-6">
        <div className="flex gap-6 w-full justify-center items-center h-1/4">
          <div className="border-2 border-white  bg-white w-1/3">
            <img className="p-3" src={AnimationsImage} alt="Animations" />
            <div className="text-black border-t-2 border-black">ANIMATIONS</div>
          </div>
          <div className="border-2 border-white  bg-white w-1/3">
            <img className="px-3 py-3" src={ClownImage} alt="Comedies" />
            <div className="text-black border-t-2 border-black">COMEDIES</div>
          </div>
        </div>
        <div className="flex gap-6 w-full justify-center items-center h-1/4">
          <div className="border-2 border-white  bg-white w-1/3">
            <img className="p-3" src={DramaImage} alt="Animations" />
            <div className="text-black border-t-2 border-black">DRAMA</div>
          </div>
          <div className="border-2 border-white  bg-white w-1/3">
            <img className="px-3 py-3" src={FantasyImage} alt="Animations" />
            <div className="text-black border-t-2 border-black">FANTASY</div>
          </div>
        </div>
        <div className="flex gap-6 w-full justify-center items-center h-1/4">
          <div className="border-2 border-white  bg-white w-1/3">
            <img className="p-3" src={HorrorImage} alt="Animations" />
            <div className="text-black border-t-2 border-black">HORRORS</div>
          </div>
          <div className="border-2 border-white  bg-white w-1/3 ">
            <img className="px-3 py-3" src={CrimeImage} alt="Animations" />
            <div className="text-black border-t-2 border-black">CRIME</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieGenrePage;

import React from "react";
import ImdbLogo from "../images/imdblogo.png";
import CategoryModal from "../component/CategoryModal";

import { useStore } from "../stores/store";
const HomePage = () => {
  const { movies } = useStore();
  return (
    <div className="min-h-screen w-full flex bg-[#53db90]">
      <div className="flex flex-col justify-center items-center h-full w-1/2 ">
        <img src={ImdbLogo} alt="imdb logo" />
        <div className="text-[#EDF5E1] text-8xl mt-2">GUESSER</div>
      </div>
      {movies.length > 22 && (
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-16 bg-[#05386B] font-roboto">
          {/* <div className="text-4xl text-white text-left">Choose game mode:</div> */}
          <div className="flex gap-6 justify-center ">
            <CategoryModal
              movieImg={`https://image.tmdb.org/t/p/original/${movies[3].backdrop_path}`}
            >
              {" "}
              MOST POPULAR MOVIES
            </CategoryModal>
            <CategoryModal
              movieImg={`https://image.tmdb.org/t/p/original/${movies[20].backdrop_path}`}
            >
              {" "}
              TOP RATED MOVIES
            </CategoryModal>
          </div>
          <div className="flex gap-6 justify-center">
            {" "}
            <CategoryModal
              movieImg={`https://image.tmdb.org/t/p/original/${movies[22].backdrop_path}`}
            >
              {" "}
              CHOOSE A CATEGORY 
            </CategoryModal>
            <CategoryModal
              movieImg={`https://image.tmdb.org/t/p/original/${movies[24].backdrop_path}`}
            >
              {" "}
              MOST POPULAR TV SHOWS
            </CategoryModal>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
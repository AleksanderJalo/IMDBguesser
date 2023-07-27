import React from "react";
import ImdbLogo from "../images/imdblogo.png";
import CategoryModal from "../component/CategoryModal";

import { useStore } from "../stores/store";
const HomePage = () => {
    const { movies } = useStore();
  return (
    <div className="min-h-screen w-full flex">
      <div className="flex flex-col justify-center items-center h-full w-1/2 bg-[#121212]">
        <img src={ImdbLogo} alt="imdb logo" />
        <div className="text-white text-8xl mt-2">GUESSER</div>
      </div>
      {movies.length > 22 && <div className="w-1/2 h-full bg-[#212121] flex flex-col justify-center items-center gap-6">
              <CategoryModal movieImg={`https://image.tmdb.org/t/p/original/${movies[3].backdrop_path}`}> Most Popular Movies</CategoryModal>
              <CategoryModal movieImg={`https://image.tmdb.org/t/p/original/${movies[20].backdrop_path}`}> Top Rated Movies</CategoryModal>
              <CategoryModal movieImg={`https://image.tmdb.org/t/p/original/${movies[22].backdrop_path}`}> Choose a Category</CategoryModal>
      </div>}
    </div>
  );
};

export default HomePage;

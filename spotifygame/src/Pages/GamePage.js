import React, { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import MovieModal from "../component/MovieModal";

const GamePage = () => {
  const { movies } = useStore();
  const [firstMovie, setFirstMovie] = useState();
  const [secondMovie, setSecondMovie] = useState();
  useEffect(() => {
    setFirstMovie(movies[Math.floor(Math.random() * movies.length)]);
    setSecondMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, []);
  const click = () => {
    console.log(firstMovie);
  };
  return (
    <div
      onClick={click}
      className="flex flex-col h-min-screen  w-full bg-black text-white  items-center"
    >
      <div className="h-1/2">
        {firstMovie && (
          <MovieModal
            title={firstMovie.title}
            poster={firstMovie.backdrop_path}
          />
        )}
      </div>
      <div className="h-1/2">
        {secondMovie && (
          <MovieModal
            title={secondMovie.title}
            poster={secondMovie.backdrop_path}
          />
        )}
      </div>
    </div>
  );
};

export default GamePage;

import React, { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import MovieModal from "../component/MovieModal";

const GamePage = () => {
  const { movies } = useStore();
  const [firstMovie, setFirstMovie] = useState();
  const [secondMovie, setSecondMovie] = useState();
  const [score, setScore] = useState(0);
  useEffect(() => {
    setFirstMovie(movies[Math.floor(Math.random() * movies.length)]);
    setSecondMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, []);
  const click = () => {};
  return (
    <div
      onClick={click}
      className="flex flex-col h-min-screen  w-full bg-black text-white  items-center relative gap-1"
    >
      <div className="absolute top-3 left-3 bg-white px-2 py-1 text-black z-10 border-2 border-black">{`Score: ${score}`}</div>
      <div className="absolute bg-white p-3 text-4xl border-black border-4 rounded-full left-[50%] top-[50%] tranform translate-x-[-50%] translate-y-[-50%] z-30 text-black font-roboto flex justify-center items-center">
        OR
      </div>
      <div className=" h-1/2 w-full p-1 border-white border-4">
        {firstMovie && (
          <MovieModal
            title={firstMovie.title}
            poster={firstMovie.backdrop_path}
          />
        )}
      </div>
      <div className="h-1/2 w-full  border-white border-4 p-1">
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

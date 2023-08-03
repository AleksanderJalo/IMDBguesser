import React, { useEffect, useState } from "react";
import { useStore } from "../stores/store";
import MovieModal from "../component/MovieModal";
import ShowScore from "../component/ShowScore";
const GamePage = () => {
  const { movies } = useStore();
  const [firstMovie, setFirstMovie] = useState();
  const [secondMovie, setSecondMovie] = useState();
  const [didLoose, setDidLoose] = useState(false);
  const [firstMovieScore, setFirstMovieScore] = useState();
  const [secondMovieScore, setSecondMovieScore] = useState();
  const [whichClickedFirst, setWhichClickedFirst] = useState();
  const [score, setScore] = useState(0);
  const [didBothSpin, setDidBothSpin] = useState(false);
  const [movieClicked, setMovieClicked] = useState(false);
  const [phase, setPhase] = useState("start");
  useEffect(() => {
    setFirstMovie(movies[Math.floor(Math.random() * movies.length)]);
    setSecondMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, []);

  const afterShow = () => {
    setPhase("showScoreTwo");
  };
  useEffect(() => {
    if (phase === "showScore") {
      if (whichClickedFirst === "up/left") {
        setFirstMovieScore(firstMovie.vote_average);
      } else {
        setSecondMovieScore(secondMovie.vote_average)
      }
    }
    if (phase === "showScoreTwo") {
      if (whichClickedFirst === "down/right") {
        setFirstMovieScore(firstMovie.vote_average);
      } else {
        setSecondMovieScore(secondMovie.vote_average)
      }
    }
  })

  const guess = (isFirst) => {
    if (!movieClicked) {
      if (isFirst) {
        setPhase("showScore");
        setWhichClickedFirst("up/left");
      } else {
        setPhase("showScore");
        setWhichClickedFirst("down/right");
      }
    }
    setMovieClicked(true);
  };
  const check = (isFirst) => {
    console.log("a");
    console.log(isFirst)
    if (whichClickedFirst === "up/left") {
      if (firstMovieScore >= secondMovieScore) {
        setScore((prev) => prev + 1);
      } else {
        setDidLoose(true);
      }
    } else {
      if (secondMovieScore >= firstMovieScore) {
        setScore((prev) => prev + 1);
      } else {
        setDidLoose(true);
      }
    }
  };
  return (
    <div className="flex flex-col h-min-screen  w-full bg-black text-white  items-center relative gap-1">
      {firstMovieScore && (
        <ShowScore
          score={firstMovieScore}
          isFirstMovie={true}
          afterShow={afterShow}
          didBothSpin={didBothSpin}
          check={check}
          whichClickedFirst={whichClickedFirst}
        />
      )}
      {secondMovieScore && (
        <ShowScore
          score={secondMovieScore}
          isFirstMovie={false}
          afterShow={afterShow}
          didBothSpin={didBothSpin}
          whichClickedFirst={whichClickedFirst}
          check={check}
        />
      )}
      <div className="absolute top-3 left-3 bg-white px-2 py-1 text-black z-10 border-2 border-black">{`Score: ${score}`}</div>
      <div className="absolute bg-white p-3 text-4xl border-black border-4 rounded-full left-[50%] top-[50%] tranform translate-x-[-50%] translate-y-[-50%] z-30 text-black font-roboto flex justify-center items-center">
        OR
      </div>
      <div
        onClick={() => {
          guess(true);
        }}
        className=" h-1/2 w-full p-1 border-white border-4"
      >
        {firstMovie && (
          <MovieModal
            title={firstMovie.title}
            poster={firstMovie.backdrop_path}
          />
        )}
      </div>
      <div
        onClick={() => {
          guess(false);
        }}
        className="h-1/2 w-full  border-white border-4 p-1"
      >
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

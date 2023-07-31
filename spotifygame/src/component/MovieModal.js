import React from "react";

const MovieModal = (props) => {
  return (
    <div
      className="h-full w-full bg-cover bg-center relative flex justify-center items-center "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.poster})`,
      }}
    >
      <div className="text-black text-xl font-roboto bg-white absolute p-3 w-4/5 shadow-black shadow-[8px_8px_0_0]">{props.title}</div>
    </div> 
  );
};

export default MovieModal;

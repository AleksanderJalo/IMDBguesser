import React from "react";

const CategoryModal = (props) => {
  return (
    <div className="w-full flex flex-col items-center h-full px-2 py-2 justify-center">
      <img className=" w-full border-white border-2 border-b-0" src={props.movieImg} />
      <div className="text-xs text-white border-white border-2 w-full justify-center items-center py-1  whitespace-nowrap flex font-roboto">{props.children}</div>
    </div>
  );
};

export default CategoryModal;

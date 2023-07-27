import React from "react";

const CategoryModal = (props) => {
  return (
    <div className="w-2/5 bg-[#121212]">
      <img className="p-3" src={props.movieImg} />
      <div className="bg-[#121212] text-3xl pb-3 text-white">
        {props.children}
      </div>
    </div>
  );
}; 

export default CategoryModal;

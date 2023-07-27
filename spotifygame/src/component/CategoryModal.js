import React from "react";

const CategoryModal = (props) => {
  return (
    <div className="w-2/5 ">
      <div className=" bg-[#379683] hover:bg-[#53db90] border-black border-8">
        <img className="p-3" src={props.movieImg} />
        <div className="text-3xl pb-3 text-[#05386B]  ">{props.children}</div>
      </div>
    </div>
  );
};

export default CategoryModal;

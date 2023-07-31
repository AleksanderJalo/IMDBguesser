import React, { useEffect, useState } from "react";

const ShowScore = (props) => {
  const [score, setScore] = useState(0);
    const [checked, setChecked] = useState(false);
    const [finish, setFinish] = useState(false);
  useEffect(() => {
    let interval;
    if (score === 0) {
      const interval = setInterval(() => {
        setScore((prev) => Math.round((prev + 0.1) * 10) / 10);
      }, 10);
    }

    if (score > props.score) {
      setScore(props.score);
      if (!props.didBothSpin) {
        setTimeout(() => {
          props.afterShow(props.isFirstMovie);
        }, 400);
      } else {
        setChecked(true);
      }
      if (checked && !finish) {
        setFinish(true);
        setTimeout(() => {
          props.check();
        }, 500);
      }
      clearInterval(interval);
    }
  });
  return (
    <div
      className={`absolute bg-white z-30 text-black text-3xl p-3 w-1/6 shadow-black shadow-[6px_6px_0_0] ${
        props.isFirstMovie ? "left-[50%] top-[35%]" : "left-[50%] bottom-[35%]"
      } translate-x-[-50%]`}
    >
      {score}
    </div>
  );
};

export default ShowScore;

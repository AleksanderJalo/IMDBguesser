import React, { useEffect, useState } from "react";

const ShowScore = (props) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  useEffect(() => {
    console.log("score:")
    console.log(props.score);
    const numberBeforeComa = Math.floor(props.score);
    const numberAfterComa = Math.floor((props.score - numberBeforeComa) * 10);
    let delay = 0;

    for (let i = 0; i < numberBeforeComa; i++) {
      setTimeout(() => {
        setFirstNumber((prev) => prev + 1);
      }, (i + 1) * 30);
      delay += (i + 1) * 30;
    }
    if (numberAfterComa !== 0) {
      setTimeout(() => {
        for (let i = 0; i < numberAfterComa; i++) {
          setTimeout(() => {
            setSecondNumber((prev) => prev + 1);
          }, (i + 1) * 30);
        }
      }, delay);
    }
  }, []);
  useEffect(() => {
    console.log(firstNumber + secondNumber / 10);
    console.log(props.score)
    if (firstNumber + secondNumber / 10 === props.score) {
      console.log("end");
    }
  });
  return (
    <div
      className={`absolute bg-white z-30 text-black text-3xl p-3 w-1/6 shadow-black shadow-[6px_6px_0_0] ${
        props.isFirstMovie ? "left-[50%] top-[35%]" : "left-[50%] bottom-[35%]"
      } translate-x-[-50%]`}
    >
      {`${firstNumber}.${secondNumber}`}
    </div>
  );
};

export default ShowScore;

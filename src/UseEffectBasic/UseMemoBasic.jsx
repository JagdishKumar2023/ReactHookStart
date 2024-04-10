import React, { useMemo, useState } from "react";

const UseMemoBasic = () => {
  const [counterOne, setCounterOne] = useState(1);
  const [counterTwo, setCounterTwo] = useState(2);
  //   console.log(counterTwo, counterOne);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // This useMemo hook is used to calculation of any hard type of expansive calculation and make your app is faster to the user experenance

  const isEven = useMemo(() => {
    console.log("this function run");
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  console.log(isEven);

  return (
    <div>
      <button onClick={IncrementOne}>counter One {counterOne}</button>
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={IncrementTwo}>counter Two {counterTwo}</button>
    </div>
  );
};

export default UseMemoBasic;

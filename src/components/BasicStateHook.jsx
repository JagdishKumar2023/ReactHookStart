import React, { useState } from "react";

const BasicStateHook = () => {
  // const [count, setCount] = useState(4);
  const [state, setState] = useState({ count: 4, theme: "blue" });
  // Destruture in array
  const count = state.count;
  const theme = state.theme;

  const increment = () => {
    // setCount((prev) => prev + 1);
    // setCount(count + 1);

    // some advance code in here

    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  };

  const decrement = () => {
    // setCount((prev) => prev - 1);
    // setCount(count - 1);

    // some advance code in here

    setState((prev) => {
      return { ...prev, count: prev.count - 1 };
    });
  };

  return (
    <div>
      <button onClick={increment}>++</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={decrement}>--</button>
    </div>
  );
};

export default BasicStateHook;

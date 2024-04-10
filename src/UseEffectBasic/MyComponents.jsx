import React, { useEffect, useState } from "react";

const MyComponents = () => {
  const [count, setCount] = useState(0);

  // This useEffect is update the value the website is render first time

  useEffect(() => {
    console.log("My components is mounting");
    return function () {
      console.log("Unmounting......");
    };
  }, []);

  // Dependance array is used to update the value of the any state is see in web page

  useEffect(() => {
    console.log("Count got update", count);
    return function () {
      console.log("Returning count", count);
    };
  }, [count]);

  return (
    <div>
      <h3> Count Value is update {count}</h3>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
};

export default MyComponents;

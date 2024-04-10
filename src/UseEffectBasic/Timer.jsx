import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    //Mount
    console.log("Adding new Interval");

    const timer = setInterval(() => setTime(time + 1), 1000);

    return function () {
      console.log("clear the interval");
      clearInterval(timer);
    };
  }, [time]);
  //   console.log(time);

  return (
    <div>
      <h1>Stop watch</h1>
      <p>Current Time is {time}</p>
    </div>
  );
};

export default Timer;

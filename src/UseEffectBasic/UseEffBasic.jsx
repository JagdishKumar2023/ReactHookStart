import React, { useEffect, useState } from "react";

const UseEffBasic = () => {
  const [resouresType, setResouresType] = useState("posts");
  const [data, setData] = useState(null);
  //   console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resouresType}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [resouresType]);

  console.log(data);

  return (
    <div>
      <button onClick={() => setResouresType("post")}>Post</button>
      <button onClick={() => setResouresType("user")}>user</button>
      <button onClick={() => setResouresType("comment")}>comment</button>
      {data?.map((item, i) => {
        <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default UseEffBasic;

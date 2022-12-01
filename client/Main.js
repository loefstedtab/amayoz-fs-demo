import React, { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    console.log("Main Component Mounted")
  }, [])
  return (
    <div id="main" className="row container">
      <h1>Amayoz</h1>
      <p>Count: {count}</p>
      <p onClick={() => {setCount(count +1)}}>add</p>
    </div>
  );
};

export default Main;

import axios from "axios";
import React, { useEffect, useState } from "react";

// get => '/api/authors' => [{id,name}, {id,name}];
//onMount gets data

const Main = () => {
  const [count, setCount] = useState(0);
  const [authors, setAuthors] = useState([])
  useEffect(() => {
    const getAuthors = async () => {
      let response = await axios.get("/api/authors");
      let data = response.data;
      setAuthors(data)
      console.log("response", authors);
      console.log("Main Component Mounted");
    };
    getAuthors();
  }, []);

  const renderAuthors = () => {
    if (!authors){
      return(
        <p>authors not loaded yet</p>
      )
    }
    authors.map((a) => {
      return (
        <div className="comp">
          <h1>{a.name}</h1>
          <p>{a.id}</p>
        </div>
      )
    })
  }
   return (
    <div id="main" className="row container">
      <h1>Amayoz</h1>
      <p>Count: {count}</p>
      <p
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </p>
     {renderAuthors()}
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import { Recipe, Banner } from "./components";
import "./index.css";

function App() {
  const [searchkey, setKey] = useState();
  const [filter, setFilter] = useState();
  const getData = (searchinput) => {
    setKey(searchinput);
    console.log("search", searchinput);
  };

  const getData1 = (filtervalue) => {
    setFilter(filtervalue);
    console.log("sort by", filtervalue);
  };
  return (
    <div className="flex flex-col items-center h-screen w-screen font-DST app">
      <Banner onSubmit={getData1} />
      <div className="grid main">
        <Recipe filter={filter} searchkey={searchkey} />
      </div>
      <div className="flex flex-col items-center w-full mt-10 bg-red-900 footer">
        footer
      </div>
    </div>
  );
}

export default App;

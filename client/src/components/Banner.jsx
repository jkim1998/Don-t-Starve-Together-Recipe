import React, { useState } from "react";

const Banner = (props) => {
  const [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    props.onSubmit(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-fit w-4/5 p-5 my-10 gap-10 bg-slate-900">
        <h1 className="text-white">Don't Starve Together</h1>
        <h2 className="text-white">Crock Pot Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Search"
            className="w-96 p-3 rounded-lg"
          />
        </form>
        <div className="flex flex-row">
          <div className="flex flex-row gap-2 bg-sky-300">Sort by</div>

          <select onChange={handleFilter}>
            <option value="health">health</option>
            <option value="sanity">sanity</option>
            <option value="hunger">hunger</option>
            <option value="spoil">spoil</option>
            <option value="alphabet">alphabet</option>
          </select>
          <div className="flex flex-row gap-2 bg-sky-300">
            {/* <input type="checkbox" checked="checked" /> */}
            <span className="text-white">Warly</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

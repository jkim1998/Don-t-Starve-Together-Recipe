import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-fit w-4/5 my-10 gap-10 bg-slate-900">
        <h1 className="text-white">Don't Starve Together</h1>
        <h2 className="text-white">Crock Pot Recipe</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="w-96 p-3 rounded-lg"
          />
        </form>
        <div className="flex flex-row gap-2">
          <input type="checkbox" checked="checked" />
          <span className="text-white">Wally</span>
        </div>
      </div>
    </>
  );
};

export default Banner;

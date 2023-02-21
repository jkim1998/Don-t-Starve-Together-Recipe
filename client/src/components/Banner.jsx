import React, { useState } from "react";

const Banner = () => {
  const [sort, setSort] = useState(false);
  const toggleSort = () => {
    setSort(!sort);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-fit w-4/5 p-5 my-10 gap-10 bg-slate-900">
        <h1 className="text-white">Don't Starve Together</h1>
        <h2 className="text-white">Crock Pot Recipe</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="w-96 p-3 rounded-lg"
          />
        </form>
        <div className="flex flex-row">
          <div className="flex flex-row gap-2 bg-sky-300">Sort by</div>
          {!sort ? (
            <button onClick={() => toggleSort()}>open</button>
          ) : (
            <>
              <ul className="fixed bg-sky-900">
                <li>Health Value</li>
                <li>Hunger Value</li>
                <li>Sanity Value</li>
                <li>Favorite</li>
                <li>Warly</li>
                <button onClick={() => toggleSort()}>close</button>
              </ul>
            </>
          )}
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

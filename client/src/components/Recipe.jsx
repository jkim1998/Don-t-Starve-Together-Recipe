import React, { useState, useEffect } from "react";
import { RecipeColumn, RecipeData } from "../data/Data";
// import data from "../data/dataSource.json";
import { frame, health, hunger, sanity, Maxwell, Twigs } from "../data";

const Recipe = () => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [recipe, setRecipe] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setrecipe(RecipeData);
  //       console.log("data:" + RecipeData.dish);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   setrecipe();
  // }, []);

  return (
    <>
      {RecipeData.map((data) => (
        <div className="flex flex-col p-4 rounded-lg bg-slate-400/60">
          <div className="flex flex-col h-6/7">
            <div className="flex flex-row justify-between items-center h-1/3">
              <div className="flex flex-row justify-between items-center h-auto w-auto p-3 bg-frame bg-cover bg-no-repeat">
                <img src={data.icon} className="h-full w-full" />
              </div>
              <div className="flex flex-col justify-between items-center w-1/2 h-full gap-2">
                <div className="flex flex-row h-1/3 w-full overflow-hidden">
                  <img src={health} />
                  <p className="flex justify-center items-center h-full w-full">
                    {data.health}
                  </p>
                </div>
                <div className="flex flex-row h-1/3 w-full overflow-hidden">
                  <img src={hunger} />
                  <p className="flex justify-center items-center w-full">
                    {data.hunger}
                  </p>
                </div>
                <div className="flex flex-row h-1/3 w-full overflow-hidden">
                  <img src={sanity} />
                  <p className="flex justify-center items-center w-full">
                    {data.sanity}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="flex justify-center items-center h-1/6 w-full">
              {!data.dish ? <h2>s</h2> : <h2>{data.dish}</h2>}
            </h2>
            <div className="flex flex-col h-1/2">
              <div className="flex flex-row h-1/3">
                <img
                  src={Twigs}
                  className="h-auto w-1/4  bg-frame bg-cover bg-no-repeat"
                />
                <img
                  src={Twigs}
                  className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                />
                <img
                  src={Twigs}
                  className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                />
                <img
                  src={Twigs}
                  className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                />
              </div>
              <div className="flex flex-row h-1/3">
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
              </div>
              <div className="flex flex-row h-1/3">
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
                <img src={frame} className="h-auto w-1/4" />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center text-center mt-5 h-10 bg-sky-200">
              <p>{data.note}</p>
            </div>
          </div>
          <div className="flex flex-col h-1/7">
            <div className="flex flex-row overflow-x-hidden container">
              <img src={Maxwell} className="h-auto w-1/4" />
              <img src={Maxwell} className="h-auto w-1/4" />
              <img src={Maxwell} className="h-auto w-1/4" />
              <img src={Maxwell} className="h-auto w-1/4" />
              <img src={Maxwell} className="h-auto w-1/4" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recipe;

import React, { useState, useEffect } from "react";
import { RecipeColumn, RecipeData } from "../data/Data";
// import data from "../data/dataSource.json";
import { frame, health, hunger, sanity, Maxwell, Twigs } from "../data";

const Recipe = () => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setData(RecipeData);
        console.log("data:" + RecipeData.dish);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-15 p-10 m-10 rounded-lg bg-slate-400">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center h-full w-full p-3 bg-frame bg-cover bg-no-repeat">
            <img src={RecipeData[0].icon} className="h-full w-full" />
          </div>
          <div className="flex flex-col justify-between items-center w-1/2 h-full gap-2">
            <div className="flex flex-row w-full">
              <img src={health} />
              <p className="flex justify-center items-center w-full">
                {RecipeData[0].hunger}
              </p>
            </div>
            <div className="flex flex-row w-full">
              <img src={hunger} />
              <p className="flex justify-center items-center w-full">
                {RecipeData[0].sanity}
              </p>
            </div>
            <div className="flex flex-row w-full">
              <img src={sanity} />
              <p className="flex justify-center items-center w-full">
                {RecipeData[0].health}
              </p>
            </div>
          </div>
        </div>
        <p>{RecipeData[0].dish}</p>
        <div className="flex flex-col h-1/3 overflow-y-auto">
          <div className="flex flex-row h-1/8 bg-slate-900">
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
          <div className="flex flex-row h-1/8 bg-slate-900">
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
          </div>
          <div className="flex flex-row h-1/8 bg-slate-900">
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
          </div>
          <div className="flex flex-row h-1/8 bg-slate-900">
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
            <img src={frame} className="h-auto w-1/4" />
          </div>
        </div>
        <div className="flex flex-row mt-5 overflow-x-scroll bg-slate-300">
          <img src={Maxwell} className="h-auto w-1/4" />
          <img src={Maxwell} className="h-auto w-1/4" />
          <img src={Maxwell} className="h-auto w-1/4" />
          <img src={Maxwell} className="h-auto w-1/4" />
          <img src={Maxwell} className="h-auto w-1/4" />
        </div>
      </div>
      <div className="flex flex-col w-15 p-10 m-10 bg-slate-400">
        <img src={RecipeData[1].icon} />
        <p>{RecipeData[1].dish}</p>
        <p>{RecipeData[1].hunger}</p>
        <p>{RecipeData[1].sanity}</p>
        <p>{RecipeData[1].health}</p>
      </div>
      <div className="flex flex-col w-15 p-10 m-10 bg-slate-400">
        <img src={RecipeData[1].icon} />
        <p>{RecipeData[1].dish}</p>
        <p>{RecipeData[1].hunger}</p>
        <p>{RecipeData[1].sanity}</p>
        <p>{RecipeData[1].health}</p>
      </div>
      <div className="flex flex-col w-15 p-10 m-10 bg-slate-400">
        <img src={RecipeData[1].icon} />
        <p>{RecipeData[1].dish}</p>
        <p>{RecipeData[1].hunger}</p>
        <p>{RecipeData[1].sanity}</p>
        <p>{RecipeData[1].health}</p>
      </div>
      <div className="flex flex-col w-15 p-10 m-10 bg-slate-400">
        <img src={RecipeData[1].icon} />
        <p>{RecipeData[1].dish}</p>
        <p>{RecipeData[1].hunger}</p>
        <p>{RecipeData[1].sanity}</p>
        <p>{RecipeData[1].health}</p>
      </div>
    </>
  );
};

export default Recipe;

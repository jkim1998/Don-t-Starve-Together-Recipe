import React, { useState, useEffect } from "react";
import { RecipeColumn, RecipeData } from "../data/Data";
import data from "../data/data.json";
import { frame, health, hunger, sanity, Maxwell, Twigs } from "../data";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Details } from "./";

const Recipe = () => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [recipe, setRecipe] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [popup, setPopup] = useState(false);
  const [temp, setTemp] = useState([]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    // recipe.favorite = !recipe.favorite;
  };

  const togglePopup = (props) => {
    setPopup(!popup);
    setTemp(props);
    console.log(props);
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       setRecipe(RecipeData);
  //       console.log("data:" + RecipeData.dish);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      {data.map((data) => (
        <>
          <div
            className="flex flex-col p-4 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-600"
            style={{
              backgroundColor: data.warly
                ? "rgba(234, 172, 173, 0.8)"
                : "rgba(182, 172, 173, 0.8)",
            }}
            onClick={() => togglePopup(data)}
          >
            <div className="flex flex-col h-6/7">
              <div>
                {!favorite ? (
                  <button onClick={() => toggleFavorite()}>
                    <AiOutlineStar />
                  </button>
                ) : (
                  <button onClick={() => toggleFavorite()}>
                    <AiFillStar color={"#ffefa4"} />
                  </button>
                )}
              </div>
              <div className="flex flex-row justify-between items-center h-1/3">
                <div className="flex flex-row justify-between items-center h-auto w-auto p-3 bg-frame bg-cover bg-no-repeat">
                  {data.icon ? (
                    <img src={data.icon} className="h-full w-full" />
                  ) : (
                    <img src={Twigs} />
                  )}
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
                {!data.dish ? <h2>Unknown Dish</h2> : <h2>{data.dish}</h2>}
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
              <div className="flex flex-row justify-center items-center text-center mt-5 h-10">
                <p>{data.note}</p>
              </div>
            </div>
            <div className="flex flex-col h-1/7">
              <div className="flex flex-row overflow-x-hidden container">
                <img src={Maxwell} className="h-auto w-1/4" />
              </div>
            </div>
          </div>
          {popup && (
            <div
              className="flex flex-col justify-center items-center bg-black/5 absolute inset-0 p-10"
              style={{
                display: popup ? "" : "none",
              }}
            >
              <div className="bg-slate-200 rounded-lg">
                <div className="text-end my-5 mr-4">
                  <button onClick={() => togglePopup()}>x</button>
                </div>
                <Details data={temp} />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default Recipe;

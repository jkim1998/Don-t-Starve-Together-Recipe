import React, { useState, useEffect } from "react";
import { RecipeColumn, RecipeData } from "../data/Data";
import data from "../data/data.json";
import { frame, health, hunger, sanity, Maxwell, random, Twigs } from "../data";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Details } from "./";

const Recipe = (props) => {
  const toolbarOptions = ["Search"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [recipe, setRecipe] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [popup, setPopup] = useState(false);
  const [temp, setTemp] = useState([]);
  const [data1, setData] = useState(data);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    // recipe.favorite = !recipe.favorite;
  };

  const togglePopup = (props) => {
    setPopup(!popup);
    setTemp(props);
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const sortArray = (type) => {
    const types = {
      health: "health",
      sanity: "sanity",
      hunger: "hunger",
      alphabet: "dish",
      spoil: "spoil",
    };
    const sortProperty = types[type];
    const sorted = [...data.sort((a, b) => b[sortProperty] - a[sortProperty])];
    setData(sorted);
    console.log("sorted by", types[type]);
  };

  useEffect(() => {
    try {
      sortArray(props.filter);
    } catch (err) {
      // console.log(err);
    }
    // console.log("in recipe component:", filter);
  }, [props]);

  return (
    <>
      {data1.map((data) => (
        <div key={data.dish}>
          <div
            className="flex flex-col h-[350px] p-2 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-600"
            style={{
              backgroundColor: data.warly
                ? "rgba(234, 172, 173, 0.4)"
                : "rgba(182, 172, 173, 0.4)",
            }}
            onClick={() => togglePopup(data)}
          >
            <div className="flex flex-col h-full">
              <div className="">
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
                    <img src={data.icon} className="h-auto w-[50px]" />
                  ) : (
                    <img src={random} className="h-auto w-[50px]" />
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
              <div className="flex justify-center items-center h-1/6 w-full py-2">
                {!data.dish ? <h2>Unknown Dish</h2> : <h2>{data.dish}</h2>}
              </div>
              <div className="flex flex-col h-[150px]">
                <div className="flex flex-row h-1/3">
                  <img
                    src={random}
                    className="h-auto w-1/4  bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                </div>
                <div className="flex flex-row h-1/3">
                  <img
                    src={random}
                    className="h-auto w-1/4  bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                </div>
                <div className="flex flex-row h-1/3">
                  <img
                    src={random}
                    className="h-auto w-1/4  bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                  <img
                    src={random}
                    className="h-auto w-1/4 bg-frame bg-cover bg-no-repeat"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col justify-between h-1/5 bg-black">
              <div className="flex flex-row justify-center items-center text-center h-[80px]">
                <p>{data.note} d</p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row overflow-x-hidden container">
                  {data.character ? (
                    <img src={Maxwell} className="h-auto w-1/4" />
                  ) : (
                    <img className="h-auto w-1/4" src={random} />
                  )}
                </div>
              </div>
            </div> */}
          </div>
          {popup && (
            <div
              className="flex flex-col justify-center items-center bg-slate-900/[.01] absolute inset-0 p-10"
              style={{
                display: popup ? "" : "none",
              }}
              onClick={() => togglePopup()}
            >
              <div
                className="bg-slate-200 rounded-lg pointer-events-auto"
                onClick={handleChildClick}
              >
                <div className="text-end my-5 mr-4">
                  <button onClick={() => togglePopup()}>x</button>
                </div>
                <Details data={temp} />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Recipe;

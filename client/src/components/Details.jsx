import React from "react";
import { frame, health, hunger, sanity, Maxwell, Twigs, random } from "../data";

const Details = ({ data }) => {
  // console.log(data);

  return (
    <div className="flex flex-col justify-center items-center gap-4 mx-10 w-[400px] min-h-[700px]">
      <p className="border-solid border-b-2 border-black">{data.dish}</p>
      <div className="flex flex-row gap-2 w-full">
        {data.icon ? (
          <img
            src={data.icon}
            className="h-fit w-2/5 p-2 bg-frame bg-cover bg-no-repeat"
          />
        ) : (
          <img
            src={random}
            className="h-fit w-2/5 p-2 bg-frame bg-cover bg-no-repeat"
          />
        )}
        <div className="flex flex-col w-3/5">
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-1/3 justify-center items-center">
              <img src={health} className="w-full h-auto" />
              <p className="w-full text-center h-full">{data.health}</p>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center">
              <img src={sanity} className="w-full h-auto" />
              <p className="w-full text-center h-full">{data.sanity}</p>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center">
              <img src={hunger} className="w-full h-auto" />
              <p className="w-full text-center h-full">{data.hunger}</p>
            </div>
          </div>
          <div className="text-center">
            <p className="border-solid border-b-2 border-black">Side Effects</p>
            {data.note ? <p>{data.note}</p> : <p>none</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full gap-7">
        <div className="text-center w-1/2">
          <p className="border-solid border-b-2 border-black">Type</p>
          {data.type ? <p>{data.type}</p> : <p>unknown</p>}
        </div>
        <div className="text-center w-1/2">
          <p className="border-solid border-b-2 border-black">Spoils</p>
          {data.spoil ? <p>{data.spoil}</p> : <p>unknown</p>}
        </div>
      </div>
      <div className="text-center w-full">
        <p className="border-solid border-b-2 border-black">cooking time</p>
        {data.time ? <p>{data.time}</p> : <p>unknown</p>}
      </div>
      <div className="text-center w-full h-fit">
        <p className="border-solid border-b-2 border-black mb-2">Recipe</p>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col h-fit w-1/2">
            <div className="flex flex-row">
              <img
                className="h-fit w-1/4 p-2 bg-frame bg-cover bg-no-repeat"
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={random}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[50px] w-full text-center">
        {data.note ? <p>{data.note}</p> : <p>a</p>}
      </div>
      <div className="w-full h-fit">
        <img src={Maxwell} className="h-[50px]" />
      </div>
    </div>
  );
};

export default Details;

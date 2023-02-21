import React from "react";
import { frame, health, hunger, sanity, Maxwell, Twigs } from "../data";

const Details = ({ data }) => {
  // console.log(data);

  return (
    <div className="flex flex-col justify-center items-center gap-4 m-10 mt-0 w-[400px] h-[700px]">
      <p className="border-solid border-b-2 border-black">{data.dish}</p>
      <div className="flex flex-row gap-2 w-full">
        <img
          src={data.icon}
          className="h-fit w-2/5 p-2 bg-frame bg-cover bg-no-repeat"
        />
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
            <p>None</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full gap-7">
        <div className="text-center w-1/2">
          <p className="border-solid border-b-2 border-black">Type</p>
          <p>Meat</p>
        </div>
        <div className="text-center w-1/2">
          <p className="border-solid border-b-2 border-black">Spoils</p>
          <p>Average</p>
        </div>
      </div>
      <div className="text-center w-full">
        <p className="border-solid border-b-2 border-black">cooking time</p>
        <p>Short</p>
      </div>
      <div className="text-center w-full h-full">
        <p className="border-solid border-b-2 border-black">Recipe</p>
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="flex flex-col h-fit w-1/2">
            <div className="flex flex-row">
              <img
                className="h-fit w-1/4 p-2 bg-frame bg-cover bg-no-repeat"
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
            <div className="flex flex-row">
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
              <img
                className="h-auto w-1/4 p-2 bg-frame bg-cover bg-no-repeat "
                src={Twigs}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

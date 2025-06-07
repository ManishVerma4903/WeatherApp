import React from "react";
import Forcast from "./Forcast";

function LeftBottom() {
  const forcast = [1, 2, 3, 4, 5];
  return (
    <div className="">
      <h1 className="opacity-80 mb-4 ">5 Days Forcast</h1>
      <div className="bg-zinc-800 lg:w-fit p-5 rounded-3xl   ">

      {
        forcast.map((item,index) =><Forcast />)
      }
      
      </div>
    </div>
  );
}

export default LeftBottom;

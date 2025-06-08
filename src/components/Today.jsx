import React from "react";

function Today({ time, img, si }) {
  return (
    <div className="bg-zinc-800 px-5 py-3 rounded-xl">
      <h1 className="text-center lg:text-lg opacity-40">{time}</h1>
      <img className="w-15 lg:w-20 ml-auto my-2" src={img} alt="" />
      <div className="flex justify-center ">
        <h1 className="lg:text-xl opacity-40">-41</h1> 
        <h1 className={`  opacity-40  ${si != "o" ? "text-md lg:text-lg ml-0.5" :"text-xs lg:text-sm"}`}>{si}</h1>
      </div>
    </div>
  );
}

export default Today;

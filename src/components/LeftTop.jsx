import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function LeftTop() {
  return (
    <div className="bg-zinc-800 w-1/5 p-5 rounded-3xl">
      <h1>Now</h1>
      <div className=" flex items-center gap-20 ">
        <div className="flex items-start gap-0.5">
          <h1 className="text-6xl mt-2">5</h1>
          <span className="text-3xl">o</span>
          <span className="text-3xl mt-4">C</span>
        </div>
        <img className="w-14" src="/public/images/01n.png" alt="" />
      </div>
      <h1 className="my-3">Broken cloud</h1>
      <hr className="opacity-40" />

      <div className=" mt-5">
        <div className="flex gap-2 items-center">
          <FaCalendar />
          <h1 className="opacity-40">Wednesday 1, Mar</h1>
        </div>
        <div className="flex gap-2 items-center mt-2">
            <FaLocationDot />

          <h1 className="opacity-40">London, GB</h1>
        </div>
      </div>
    </div>
  );
}

export default LeftTop;

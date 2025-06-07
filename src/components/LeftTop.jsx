import React from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function LeftTop() {
  return (
    <div className="bg-zinc-800 lg:w-fit p-5 rounded-3xl">
      <h1>Now</h1>
      <div className=" flex items-center lg:gap-20 justify-between mr-10 ">
        <div className="flex items-start gap-0.5">
          <h1 className="lg:text-6xl text-8xl mt-2">5</h1>
          <span className="lg:text-3xl text-5xl">o</span>
          <span className="lg:text-3xl text-5xl mt-4">C</span>
        </div>
        <img className="lg:w-14" src="/public/images/01n.png" alt="" />
      </div>
      <h1 className="my-3 ">Broken cloud</h1>
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

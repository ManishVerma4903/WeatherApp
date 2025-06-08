import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function LeftTop({ temp, sky,name }) {
  const date = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
 
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-zinc-800 lg:w-fit p-5 rounded-3xl">
      <h1>Now</h1>
      <div className=" flex items-center lg:gap-20 justify-between mr-10 ">
        <div className="flex items-start gap-0.5">
          <h1 className="lg:text-6xl text-8xl mt-2}">{temp}</h1>
          <span className="lg:text-3xl text-5xl">o</span>
          <span className="lg:text-3xl text-5xl mt-4">C</span>
        </div>
        <img className="lg:w-14 " src="/public/images/01n.png" alt="" />
      </div>
      <h1 className="my-3 ">{sky}</h1>
      <hr className="opacity-40" />

      <div className=" mt-5">
        <div className="flex gap-2 items-center">
          <FaCalendar />
          <h1 className="opacity-40">
            {days[date.getDay()]} {date.getDate()}, {months[date.getMonth()]}
          </h1>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <FaLocationDot />

          <h1 className="opacity-40">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default LeftTop;

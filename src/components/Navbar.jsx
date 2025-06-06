import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-between mb-10">

      <div className="flex items-center gap-2">
        <img className="w-12" src="/public/images/weather-app.png" alt="" />
        <h1 className="text-2xl">WeatherMate</h1>
      </div>

      <div className="flex items-center bg-zinc-800 w-1/3 px-4 gap-3 rounded-full">
        <FiSearch />

        <input type="text" placeholder="Search location" className="outline-none w-full " />
      </div>

      <div className="flex items-center cursor-pointer bg-purple-600 px-3 gap-3 rounded-full">
        <FaLocationCrosshairs />

        <h1 className="">Current Location</h1>
      </div>
    </div>
  );
}

export default Navbar;

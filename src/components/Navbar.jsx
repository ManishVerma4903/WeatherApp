import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";


function Navbar({handleSearchCity}) {
  const [city,setCity] = useState("");

  const handleSearch = (e)=>{
    setCity(e.target.value)
  }  

  return (
    <div className="flex mb-10">

      <div className="flex items-center gap-2">
        <img className="w-12 invert" src="/public/images/weather-app.png" alt="" />
        <h1 className="lg:text-2xl  text-xl">WeatherMate</h1>
      </div>

      <div className="  flex ml-auto lg:w-[65%] lg:justify-between gap-5">
        <div className="flex items-center bg-zinc-800 lg:w-1/2 px-4 gap-3 rounded-full">
        <FiSearch />

        <input onChange={handleSearch} type="text" placeholder="Search location" className="hidden  lg:block outline-none w-full " />
      </div>

      <div onClick={()=>handleSearchCity(city)} className="flex items-center cursor-pointer bg-purple-600 lg:px-3 px-4 lg:gap-3 rounded-full">
        <FaLocationCrosshairs />

        <h1  className="hidden lg:block ">Search Location</h1>
      </div>
      </div>
    </div>
  );
}

export default Navbar;

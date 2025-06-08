import React, { useState } from "react";
import Todays from "./Todays";
import axios from "axios";

function RightBottom({lon,lat}) {
  const weather = [1, 2, 3, 4, 5, 6, 7, 8];
  const windSpeed = [1, 2, 3, 4, 5, 6, 7, 8];

 


  return (
    <div>
      <h1 className="my-5">Today at</h1>
      <div className="flex flex-col gap-5">
        <Todays data={weather} img={"/public/images/13n.png"} si={"o"}/>
        <Todays data={windSpeed} img={"/public/images/direction.png"} si={"km/h"}/>
      </div>
    </div>
  );
}

export default RightBottom;

import React from "react";

function Today({ data, si }) {


  return (
    <div className="bg-zinc-800 px-6 lg:px-5 py-3 rounded-xl ">
      <h1 className="text-center lg:text-lg opacity-40">{data.time}</h1>
      <img className={ `w-15 lg:w-20 ml-auto my-2    `} style={si === 'km/h' ? { transform: `rotate(${-data.deg}deg)` } : {}} src= { si == 'km/h' ? 'public/images/direction.png' : `public/images/${data.img}.png`} alt="" />
      <div className="flex justify-center ">
        <h1 className="lg:text-lg
         opacity-40">{ si === 'km/h' ? data.windSpeed :data.temp}</h1> 
        <h1 className={`  opacity-40  ${si != "o" ? "text-md lg:text-lg ml-0.5" :"text-xs lg:text-sm"}`}>{ si}</h1>
      </div>
    </div>
  );
}

export default Today;

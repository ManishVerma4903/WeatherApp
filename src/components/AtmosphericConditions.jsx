import React from "react";

function AtmosphericConditions({ title, img, value, si }) {
  return (
    <div className="bg-[#191919] lg:flex-1 w-[47%] p-5 ">
      <h1 className="opacity-40 mb-8">{title}</h1>
      <div className=" flex items-center justify-between ">
        <img
          className={`w-10 ${title != "Pressure" ? "invert" : ""}`}
          src={img}
          alt=""
        />

        <div className={`flex items-baseline ${ si == 'C' && "items-start"}`}>
          <h1 className="lg:text-4xl text-2xl">{value}</h1>
          {si == "C" ? <h1 className="">o</h1> : ""}
          <h1 className="text-xl ">{si}</h1>
        </div>
      </div>
    </div>
  );
}

export default AtmosphericConditions;

import React, { useEffect, useState } from "react";
import AirQualityUnits from "./AirQualityUnits";
import SunsetSunrise from "./SunsetSunrise";
import AtmosphericConditions from "./AtmosphericConditions";

function RightTop({ airData, sunrise, sunset, visibility, main, aqi }) {
  const { pm2_5, so2, no2, o3 } = airData;
  const { feels_like, humidity, pressure } = main;

  const aqiStatus = [
    { status: "Good", color: "bg-green-500" },
    { status: "Fair", color: "bg-lime-400" },
    { status: "Moderate", color: "bg-yellow-400" },
    { status: "Poor", color: "bg-orange-500" },
    { status: "Very Poor", color: "bg-red-500" },
  ];

  function convertSecondsToHHMM(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    airData &&
    sunrise && (
      <div className="p-5 bg-zinc-800 rounded-3xl  ">
        <h1>Todays Highlights</h1>

        <div className="top flex lg:flex-row flex-col  gap-5 mt-5 ">
          <div className="left flex-2  bg-[#191919] p-5 ">
            <div className="flex items-center justify-between">
              <h1>Air Quality Index</h1>
              <div className={`${aqiStatus[aqi - 1].color} text-[#191919] font-semibold rounded-full px-2 `}>
                {aqiStatus[aqi - 1].status}
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 flex-wrap">
              <img className="w-15 max-sm:hidden invert" src="public/images/air.png" alt="" />
              <AirQualityUnits value={pm2_5} title={"PM2.5"} />
              <AirQualityUnits value={so2} title={"SO2"} />
              <AirQualityUnits value={no2} title={"NO2"} />
              <AirQualityUnits value={o3} title={"O3"} />
            </div>
          </div>
          <div className="right flex-2 bg-[#191919] p-5">
            <div className="">
              <h1>Sunrise & Sunset</h1>

              <div className="flex mt-8 gap-5 justify-between">
                <SunsetSunrise
                  img={"/public/images/sunrise.png"}
                  title={"Sunrise"}
                  time={convertSecondsToHHMM(sunrise).toUpperCase()}
                />
                <SunsetSunrise
                  img={"/public/images/sunset.png"}
                  title={"Sunset"}
                  time={convertSecondsToHHMM(sunset).toUpperCase()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom flex  items-center justify-between  mt-5  flex-wrap lg:gap-5 gap-4.5">
          <AtmosphericConditions
            title={"Humidity"}
            img={"public/images/humidity.png"}
            value={humidity}
            si={"%"}
          />
          <AtmosphericConditions
            title={"Pressure"}
            img={"public/images/50d.png"}
            value={pressure}
            si={"hPa"}
          />
          <AtmosphericConditions
            title={"Visibility"}
            img={"public/images/visibility.png"}
            value={visibility / 1000}
            si={"km"}
          />
          <AtmosphericConditions
            title={"Feels Like"}
            img={"public/images/temperature.png"}
            value={(feels_like - 273.15).toFixed(0)}
            si={"C"}
          />
        </div>
      </div>
    )
  );
}

export default RightTop;

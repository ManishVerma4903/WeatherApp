import React, { useEffect, useState } from "react";
import Forcast from "./Forcast";
import axios from "axios";

function LeftBottom() {
  const [forcast, setForcast] = useState();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
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

  useEffect(() => {
    const response = axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=28.65&lon=77.22&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) =>
        setForcast(
          response.data.list.filter(
            (item, index) => index >= 7 && (index - 7) % 8 == 0
          )
        )
      );

  }, []);



  return (
    forcast && (
      <div className="">
        <h1 className="opacity-80 mb-4 ">5 Days Forcast</h1>
        <div className="bg-zinc-800 lg:w-fit p-5 rounded-3xl  flex flex-col gap-2  ">
          {forcast.map((item, index) => {
            const forecastDate = new Date();
            forecastDate.setDate(forecastDate.getDate() + index + 1);
            const day = days[forecastDate.getDay()];
            const date = forecastDate.getDate();
            const month = months[forecastDate.getMonth()];
            const temp = (item.main.temp -273.15).toFixed(0)
            return <Forcast key={index} day={day} date={date} month={month} temp ={temp} />;
          })}
        </div>
      </div>
    )
  );
}

export default LeftBottom;

  import React, { useEffect, useState } from "react";
  import Todays from "./Todays";
  import axios from "axios";

  function RightBottom({lon,lat}) {
    const [weather,setWeather] = useState([]);


  const[forcast,setForcast] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        const shortList = response.data.list.slice(0, 8); // Next 24 hours (3-hour intervals)
        setForcast(shortList);        

        const newWeather = shortList.map((item) => {
          const utcHour = Number(item.dt_txt.substring(11, 13));
          const istHour = (utcHour  + 0.5) % 24;
          const hour = Math.floor(istHour);
          const ampm = hour >= 12 ? "PM" : "AM";
          const formattedHour = hour % 12 || 12;

          return {
            time: `${formattedHour} ${ampm}`,
            img: item.weather[0].icon,
            temp: (item.main.temp - 273.15).toFixed(0),
            windSpeed: item.wind.speed.toFixed(0),
            deg: item.wind.deg,
          };
        });

        setWeather(newWeather);
      })
      .catch((error) => console.error(error));
  }, [lat, lon]);




    return forcast && weather && (
      <div className="">
        <h1 className="my-5 ">Today at</h1>
        <div className="flex flex-col gap-5 ">
          <Todays data={weather}  si={"o"}/>
          <Todays data={weather} si={"km/h"} />
        </div>
      </div>
    );
  }

  export default RightBottom;

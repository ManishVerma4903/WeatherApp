import React, { useEffect, useState } from "react";
import LeftTop from "./LeftTop";
import LeftBottom from "./LeftBottom";
import RightTop from "./RightTop";
import RightBottom from "./RightBottom";
import axios from "axios";

function Main({city}) {
  const [weatherData, SetWeatherData] = useState();
  const api = import.meta.env.VITE_API_KEY;

  const [airData, setAirData] = useState();

  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  // const [name, setName] = useState("Aurangabad");

  console.log("city",city);
  



  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api}`
      )
      .then((data) => {
        let lat = data.data[0].lat.toFixed(2);
        let lon = data.data[0].lon.toFixed(2);
        setLon(lon);
        setLat(lat);
        console.log("geo : ", data);

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              lat || 28.65
            }&lon=${lon || 77.22}&appid=${api}`
          )
          .then((data) => {
            SetWeatherData(data.data);
            console.log("weather: ", data);
          })
          .catch((error) => console.log(error));

        return axios
          .get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${
              Math.floor(lat) || 28
            }&lon=${Math.floor(lon) || 77}&appid=${api}`
          )
          .then((res) => {
            console.log("pollution ", res);

            return setAirData(res.data.list[0]);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.log(error));
  }, [city]);

  return weatherData && airData ? (
    <div className="flex flex-col lg:flex-row lg:gap-10 gap-5   ">
      <div className=" left flex flex-col gap-5 lg:w-fit">
        <LeftTop
          temp={(weatherData.main.temp - 273.15).toFixed(0)}
          sky={weatherData.weather[0].description}
          name={weatherData.name}
          country={weatherData.sys.country}
        />
        <LeftBottom />
      </div>
      <div className="right lg:w-[77.5%]  ">
        <RightTop
          airData={airData.components}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
          visibility={weatherData.visibility}
          main={weatherData.main}
          aqi={airData.main.aqi}
        />
        <RightBottom lat={lat} lon={lon} />
      </div>
    </div>
  ) : (
    "Loading...."
  );
}

export default Main;

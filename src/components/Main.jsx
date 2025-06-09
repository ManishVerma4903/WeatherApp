import React, { useEffect, useState } from "react";
import LeftTop from "./LeftTop";
import LeftBottom from "./LeftBottom";
import RightTop from "./RightTop";
import RightBottom from "./RightBottom";
import axios from "axios";

function Main() {
  const [weatherData, SetWeatherData] = useState();
  const api = import.meta.env.VITE_API_KEY;

  const[airData,setAirData] = useState()

  const[lon,setLon] = useState()
  const[lat,setLat] = useState()

  useEffect(() => {
     const watchId = navigator.geolocation.watchPosition(
  (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Live Latitude:", latitude);
    console.log("Live Longitude:", longitude);
  },
  (error) => {
    console.error("Error watching position:", error.message);
  },
  {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,            // Max time to wait (ms)
    maximumAge: 0             // Don't use a cached position
  }
);

    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=delhi&limit=1&appid=${api}`
      )
      .then((data) => {
        const { lat, lon } = data.data[0];
        

        

        axios
          .get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat.toFixed(0)}&lon=${lon.toFixed(0)}&appid=${api}`
          )
          .then((res) => {
            
            return setAirData(res.data.list[0])
          })
          .catch((error) => console.error(error));

        return axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(
              2
            )}&lon=${lon.toFixed(2)}&appid=${api}`
          )
          .then((data) => SetWeatherData(data.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(weatherData);
  
  
 


  return weatherData && airData ? (
    <div className="flex flex-col lg:flex-row lg:gap-10 gap-5   ">
      <div className=" left flex flex-col gap-5 lg:w-fit">
        <LeftTop
          temp={(weatherData.main.temp - 273.15).toFixed(0)}
          sky={weatherData.weather[0].description}
          name={weatherData.name}
        />
        <LeftBottom />
      </div>
      <div className="right lg:w-[77.5%]  ">
        <RightTop airData={airData.components} sunrise={weatherData.sys.sunrise}  sunset={weatherData.sys.sunset} visibility={weatherData.visibility} main={weatherData.main} aqi ={airData.main.aqi}/>
        <RightBottom lat ={lat} lon = {lon}  />
      </div>
    </div>
  
  ) : "Loading....";



}

export default Main;

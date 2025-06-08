import React, { useEffect, useState } from 'react'
import LeftTop from './LeftTop'
import LeftBottom from './LeftBottom'
import RightTop from './RightTop'
import RightBottom from './RightBottom'
import axios from 'axios'

function Main() {
  

  const [weatherData, SetWeatherData] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/geo/1.0/direct?q=delhi&limit=1&appid=8e268e794d17ed1717ae6d14e94f0f09"
      )
      .then((data) => {
        const { lat, lon } = data.data[0];
         return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(
          2
        )}&lon=${lon.toFixed(2)}&appid=8e268e794d17ed1717ae6d14e94f0f09`
      )
      .then((data) => SetWeatherData(data.data))
      .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

   

  }, []);

  const temp =(weatherData && (weatherData.main.temp - 273.15).toFixed(1) )

  console.log(weatherData);
  
  

  return ( weatherData ? 
    (
    <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 '>
      <div className=' left flex flex-col gap-5 lg:w-fit'>
        <LeftTop  temp ={temp} sky={weatherData.weather[0].main} name={weatherData.name} />
        <LeftBottom />
      </div>
      <div className="right lg:w-[77.5%]  ">
        <RightTop />
        <RightBottom />
      </div>
    </div>) 
    : "Loading"
  )
}

export default Main
import React from 'react'
import AirQualityUnits from './AirQualityUnits'
import SunsetSunrise from './SunsetSunrise'
import AtmosphericConditions from './AtmosphericConditions'

function RightTop() {
  return (
    <div className='p-5 bg-zinc-800 rounded-3xl  '>
        <h1>Todays Highlights</h1>

        <div className="top flex lg:flex-row flex-col  gap-5 mt-5 ">
            <div className="left flex-2  bg-[#191919] p-5 ">
                <div className="flex items-center justify-between">
                    <h1>Air Quality Index</h1>
                    <div className="bg-green-300 text-[#191919] font-medium rounded-full px-2 ">Good</div>    
                </div>

                <div className="flex items-center justify-between mt-8">
                    <img className='w-15 invert' src="public/images/air.png" alt="" />
                    <AirQualityUnits title={"PM2.5"} />
                    <AirQualityUnits title={"SO2"} />
                    <AirQualityUnits title={"NO2"} />
                    <AirQualityUnits title={"O3"} />

                </div>
            </div>
            <div className="right flex-2 bg-[#191919] p-5">
                <div className="">
                    <h1>Sunrise & Sunset</h1>

                    <div className="flex mt-8 gap-5 ">
                        <SunsetSunrise  img={"/public/images/sunrise.png"} title ={"Sunrise"} time={"6:49 AM"} />
                        <SunsetSunrise img={"/public/images/sunset.png"} title={"Sunset"} time={"5:30 PM"} />
                    </div>
                </div>
            </div>
        </div>


        <div className="bottom flex justify-between items-center flex-wrap mt-5  lg:gap-5 gap-4.5">
            <AtmosphericConditions title={"Humidity"} img={"public/images/humidity.png"} value={"82"} si={"%"}/>
            <AtmosphericConditions title={"Pressure"} img={"public/images/50d.png"} value={"1025"} si={"hPa"}/>
            <AtmosphericConditions title={"Visibility"} img={"public/images/visibility.png"} value={"10"} si={"km"}/>
            <AtmosphericConditions title={"Feels Like"} img={"public/images/temperature.png"} value={"2"} si={"C"}/>
        </div>
    </div>
  )
}

export default RightTop
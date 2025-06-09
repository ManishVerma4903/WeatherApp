import React from 'react'

function SunsetSunrise({img,title,time}) {
  return (
    <div className='flex  gap-5 flex-wrap   '>
        <img className='w-15 h-15 invert' src={img} alt="" />

        <div className="">
            <h1 className="opacity-40  ">{title}</h1>
            <h1 className=' text-3xl opacity-90 '>{time} </h1>
        </div>
    </div>
  )
}

export default SunsetSunrise
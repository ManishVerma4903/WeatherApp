import React from 'react'

function AtmosphericConditions({title,img,value,si}) {
  return (
    <div className='bg-[#191919] lg:flex-1 w-[48%] p-5 '>
        <h1 className='opacity-40 mb-8'>{title}</h1>
        <div className=" flex items-center justify-between ">
            <img className={`w-10 ${title != "Pressure"? "invert":""}`} src={img} alt="" />
            <h1 className="lg:text-4xl text-3xl">{value} {si}</h1>
        </div>

    </div>
  )
}

export default AtmosphericConditions
import React from 'react'

function Forcast({day,date,month,temp}) {


  
  return (
    <div className='flex items-center   lg:gap-15   py-1 '>
        <div className="flex gap-2 items-center flex-1/3 lg:flex-1 ">
            
        <img className='lg:w-8 w-10 ' src="public/images/02n.png" alt="" />

        <div className="flex ">

        <h1 className='lg:text-xl text-3xl mt-0.5 lg:mt-0'>{temp}</h1>
        <span className=' text-sm '>o</span>
        </div>
        </div>
        <h1 className='opacity-40 lg:text-sm  flex-1/3     text-lg '>{  (date<10)? '0'+ date : date} {month.substring(0,3)}</h1>
        <h1 className='opacity-40 lg:text-sm text-lg  ml-auto  max-sm w-20'>{day}</h1>

    </div>
  )
}

export default Forcast
import React from 'react'

function Forcast() {
  return (
    <div className='flex items-center  lg:gap-19  py-1 justify-between'>
        <div className="flex gap-2 items-center">
            
        <img className='lg:w-8 w-10' src="public/images/02n.png" alt="" />

        <div className="flex ">

        <h1 className='lg:text-xl text-3xl mt-0.5 lg:mt-0'>7 </h1>
        <span className=' text-sm '>o</span>
        </div>
        </div>
        <h1 className='opacity-40 lg:text-sm  text-lg'>1 Mar</h1>
        <h1 className='opacity-40 lg:text-sm text-lg'>Thrusday</h1>

    </div>
  )
}

export default Forcast
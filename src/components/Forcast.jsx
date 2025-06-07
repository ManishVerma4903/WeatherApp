import React from 'react'

function Forcast() {
  return (
    <div className='flex items-center  lg:gap-12 py-1 justify-between'>
        <div className="flex gap-2 items-center">
            
        <img className='w-8' src="public/images/02n.png" alt="" />

        <div className="flex ">

        <h1 className='text-xl'>7 </h1>
        <span className=' text-sm '>o</span>
        </div>
        </div>

        <h1 className='opacity-40 text-sm'>1 Mar</h1>
        <h1 className='opacity-40 text-sm'>Thrusday</h1>

    </div>
  )
}

export default Forcast
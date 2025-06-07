import React from 'react'
import LeftTop from './LeftTop'
import LeftBottom from './LeftBottom'
import RightTop from './RightTop'

function Main() {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 '>
      <div className=' left flex flex-col gap-5 lg:w-fit'>
        <LeftTop />
        <LeftBottom />
      </div>


      <div className="right lg:w-[77.5%]  ">
        <RightTop />
      </div>
    </div>
  )
}

export default Main
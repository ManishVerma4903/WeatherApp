import React from 'react'
import Today from './Today'

function Todays({data,img,si}) {
  return (
    <div className='flex justify-between items-center flex-wrap gap-5 lg:gap-0 '>

        {
           data.map((item,index)=><Today  time={"3AM"} img={img} si={si}/>
)
        }
        
    </div>
  )
}

export default Todays
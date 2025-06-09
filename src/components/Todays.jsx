import React, { useEffect, useState } from 'react'
import Today from './Today'

function Todays({data,si }) {

 

  

  return    (
    <div className='flex lg:justify-between items-center flex-wrap gap-5 lg:gap-0 '>

        {
           data.map((item,index)=><Today data ={data[index]} si={si} img />
)
        }
        
    </div>
  )
}

export default Todays
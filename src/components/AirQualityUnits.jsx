import React from 'react'

function AirQualityUnits({value, title}) {
  return (
    <div>
        <h1 className='text-center opacity-40'>{title}</h1>
        <h1 className='text-4xl opacity-90'>{value}</h1>
    </div>
  )
}

export default AirQualityUnits
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [city,setCity] = useState("Delhi")
  const handleSearchCity = (city)=>{
    setCity(city);
  }
    
  return (
    <div className='text-white p-10'>
      <Navbar handleSearchCity={handleSearchCity} />
      <Main city={city}/>
    </div>
  )
}

export default App
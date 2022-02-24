import React, { useState } from 'react'
import { useLocation} from 'wouter';
import './Home.css'

const Home = () => {
  const [city , setCity] = useState('');  
  const [path, pushLocation] = useLocation();
  
  const handleSubmit = e => {
      e.preventDefault();
      pushLocation(`/search/${city}`);
  }

  const handleChange = e => {
      setCity(e.target.value);
  }


  return (
    <div className='div-search'>
      <h1>🌞Weather App🌞</h1>
        <form onSubmit={handleSubmit} className='form-search'>
            <label htmlFor="city">Introduce una ciudad</label>
            <input type="text" id="city" onChange={handleChange} value={city} placeholder="Introduce una ciudad..." />
        </form>
    </div>
  )
}

export default Home
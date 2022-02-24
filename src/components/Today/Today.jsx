import React from 'react'
import {Link} from 'wouter'
import './Today.css'
import images from '../../assets/images';

const Today = ({ applicable_date, max_temp, min_temp, the_temp, weather_state_name }) => {
    let image = "";
    for (let i = 0; i < images.length; i++) {
      if (weather_state_name === images[i].name) {
        image = images[i].img;
      }
    }
  
    return (
      <div className='today-info'>
        <div className='title'>
          <h1><Link to="/">🌞Weather App🌞</Link></h1>
        </div>
        <div className='data-info'>
          <img src={image} alt={weather_state_name} />
          <p className='temperature'>{the_temp.toFixed()}ºC</p>
          <p className='weather-state'>{weather_state_name}</p>
          <p className='day-style'>Today, {applicable_date}</p>
        </div>
      </div>
    )
}

export default Today
import React from 'react'
import './Day.css'
import images from '../../assets/images';

const Day = ({ applicable_date, max_temp, min_temp, weather_state_name }) => {

  let image = "";
  for (let i = 0; i < images.length; i++) {
    if (weather_state_name === images[i].name) {
      image = images[i].img;
    }
  }

  return (
    <div className='week-info'>
      <div className='date-info'>
        <p className='date'>{applicable_date}</p>
        <img src={image} alt={weather_state_name} />
      </div>
      <div className='minmaxday-flex'>
        <p className='max-temp'>{max_temp.toFixed()}ºC</p>
        <p className='min-temp'>{min_temp.toFixed()}ºC</p>
      </div>
    </div>
  )
}

export default Day
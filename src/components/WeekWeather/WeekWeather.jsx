import React from 'react'
import Day from '../Day/Day'
import Today from '../Today/Today'
import TodayHigh from '../TodayHigh/TodayHigh'
import './WeekWeather.css'

const WeekWeather = ({ info, infoDay }) => {
  return (
    <div className='flexbox-weather'>
      <div className='today'>
        {
          infoDay.map(({ applicable_date, max_temp, min_temp, weather_state_name, the_temp, id }) => <Today applicable_date={applicable_date} max_temp={max_temp} min_temp={min_temp} the_temp={the_temp} weather_state_name={weather_state_name} key={id} />)
        }
      </div>
      <div className='flex-today'>
        <div className='flex'>
          {
            info.map(({ applicable_date, max_temp, min_temp, weather_state_name, the_temp, id }) => <Day applicable_date={applicable_date} max_temp={max_temp} min_temp={min_temp} weather_state_name={weather_state_name} key={id} />)
          }
        </div>
        <div className='today-highlights'>
          {
            infoDay.map(({ air_pressure, id, humidity, visibility, wind_speed }) => <TodayHigh air_pressure={air_pressure} humidity={humidity} visibility={visibility} wind_speed={wind_speed} key={id} />)

          }
        </div>
      </div>
    </div>
  )
}

export default WeekWeather
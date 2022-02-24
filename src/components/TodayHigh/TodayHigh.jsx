import React from 'react'
import './TodayHigh.css'

const TodayHigh = ({ air_pressure, humidity, visibility, wind_speed }) => {
    return (
        <div className='global-highlights'>
            <p className='title-today'>Today's Highlights</p> 
            <div className='first-flex'>
                <div className='wind'>
                    <p>Wind status</p>
                    <p className='same1-font-size'>{wind_speed.toFixed()}mph</p>
                </div>
                <div className='humidity'>
                    <p>Humidity</p>
                    <p className='same1-font-size'>{humidity}%</p>
                </div>
            </div>
            <div className='second-flex'>
                <div className='visibility'>
                    <p>Visibility</p>
                    <p className='same2-font-size'>{visibility.toFixed(2)} miles</p>
                </div>
                <div className='pressure'>
                    <p>Air pressure</p>
                    <p className='same2-font-size'>{air_pressure} mb</p>
                </div>
            </div>
        </div>
    )
}

export default TodayHigh
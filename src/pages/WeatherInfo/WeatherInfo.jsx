import React, { useEffect, useState } from 'react';
import getWeather from '../../services/getWeather';
import WeekWeather from '../../components/WeekWeather/WeekWeather';
import { BallTriangle } from  'react-loader-spinner'

const WeatherInfo = ({ params }) => {
    const { city } = params;
    const [info, setInfo] = useState([]);
    const [infoDay, setInfoDay] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getWeather({city}).then(data => {
          for(let i = 0; i < data.length; i++){
            if (i === 0){
              setInfoDay([data[i]])
              data.splice(0,1); 
            } 
          }
            setInfo(data)
            setLoading(false);
        })
    },[city])

  return (
    <div className='loading'>
    {loading ? <BallTriangle width={10000} height={200} color="grey"/> : <WeekWeather info={info} infoDay={infoDay}/>}
    </div>
  )
}

export default WeatherInfo
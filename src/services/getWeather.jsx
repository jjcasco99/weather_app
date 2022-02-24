import axios from 'axios';

const getWeather = async ( {city = 'Madrid'} = {} ) => {
    const apiURL = `https://www.metaweather.com/api/location/search/?query=${city}`;
    const resp = await axios.get(apiURL);
    const id = resp.data[0].woeid;
    const weather = `https://www.metaweather.com/api/location/${id}`;
    const res = await axios.get(weather);
    const weatherLocation = res.data.consolidated_weather.map(info => {
        const { air_pressure, applicable_date, id, humidity , max_temp, min_temp, the_temp, visibility, weather_state_name, wind_speed } = info
        return { air_pressure, applicable_date, id, humidity , max_temp, min_temp, the_temp, visibility, weather_state_name, wind_speed };
    })
    
    return weatherLocation;
}



export default getWeather;
import { useEffect, useState } from 'react';
import cloudy from '../assets/smallWeather/cloudy.svg';
import DarkCloudy from '../assets/smallWeather/dark-cloudy.svg';
import foggy from '../assets/smallWeather/foggy.svg';
import raining from '../assets/smallWeather/raining.svg';
import snowing from '../assets/smallWeather/snowing.svg';
import SunnyCloudy from '../assets/smallWeather/sunny-cloudy.svg';
import sunny from '../assets/smallWeather/sunny.svg';

function Forecast({ hour }) {
  const weather = hour;
  console.log(weather);
  const [img, setImg] = useState();
  let celius = Math.floor(weather.main.temp - 273.15) + '°';
  let humidity = weather.main.humidity + '%';
  let pressure = weather.main.pressure + 'hPa';
  let time = new Date(weather.dt_txt).getHours();
  let weatherType = weather.weather[0].description;

  useEffect(() => {
    switch (weatherType) {
      case 'clear sky':
        setImg(sunny);
        break;
      case 'few clouds':
        setImg(SunnyCloudy);
        break;
      case 'scattered clouds':
        setImg(cloudy);
        break;
      case ('broken clouds', 'overcast clouds'):
        setImg(DarkCloudy);
        break;
      case ('shower rain', 'rain'):
        setImg(raining);
        break;
      case 'snow':
        setImg(snowing);
        break;
      case ('mist', 'fog'):
        setImg(foggy);
        break;
      default:
        setImg(sunny);
    }
  }, [weatherType]);

  return (
    <li className="flex-container">
      <div className="flex-container">
        <img className="small-img" src={img} alt="img" />
        <h4>{time}</h4>
      </div>
      <div className="flex-container">
        <p>{celius}</p>
        <p>{humidity}</p>
        <p>{pressure}</p>
      </div>
    </li>
  );
}

export default Forecast;

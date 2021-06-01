import Header from '../components/Header';
import { useSelector } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';

import { useEffect, useState } from 'react';
import Sunny from '../assets/weather/Sunny1.png';
import Cloudy from '../assets/weather/cloudy.png';
import DarkCloudy from '../assets/weather/dark-cloudy.png';
import Foggy from '../assets/weather/foggy.png';
import Raining from '../assets/weather/Raining.png';
import Snowing from '../assets/weather/snowing.png';
import SunnyCloudy from '../assets/weather/sunny-cloudy.png';
import Forecast from '../components/Forecast';
const colors = {
  light: '#63c7ff',
  sunny: '#3fb3f4',
  sunnyCloudy: '#3dacea',
  cloudy: ' #2798d7',
  foggy: '#298ec7',
  darkCloudy: '#1674a9',
  raining: '#115a83',
  snowing: '#0f4665'
};

function Weather() {
  const [color, setColor] = useState(colors.light);
  const weather = useSelector((state) => state.weather);
  let weatherType = weather.list[0].weather[0].description;
  const [img, setImg] = useState();

  useEffect(() => {
    switch (weatherType) {
      case 'clear sky':
        setColor(colors.sunny);
        setImg(Sunny);
        break;
      case 'few clouds':
        setColor(colors.sunnyCloudy);
        setImg(SunnyCloudy);
        break;
      case 'scattered clouds':
        setColor(colors.cloudy);
        setImg(Cloudy);
        break;
      case ('broken clouds', 'overcast clouds'):
        setColor(colors.darkCloudy);
        setImg(DarkCloudy);
        break;
      case ('shower rain', 'rain'):
        setColor(colors.raining);
        setImg(Raining);
        break;
      case 'snow':
        setColor(colors.snowing);
        setImg(Snowing);
        break;
      case ('mist', 'fog'):
        setColor(colors.foggy);
        setImg(Foggy);
        break;
      default:
        setColor(colors.light);
        setImg(Sunny);
    }
  }, [weatherType]);

  useEffect(() => {
    document.querySelector('.changing-background').style.background = color;
  }, [color]);

  return (
    <div className="grid-system changing-background">
      <Header />
      <WeatherInfo img={img} />

      <ul className="forecast">
        {weather.list.map((hour, index) => {
          if (index !== 0) {
            return <Forecast key={index} hour={hour} cN={'forecast-' + index} />;
          }
        })}
      </ul>
    </div>
  );
}

export default Weather;

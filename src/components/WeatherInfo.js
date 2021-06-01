import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import '../styles/utilities/_animations.scss';

function WeatherInfo({ img }) {
  let date = new Date();
  let time = date.getHours() + ':' + date.getMinutes();

  const weather = useSelector((state) => state.weather);
  let celius = Math.floor(weather.list[0].main.temp - 273.15);
  let city = weather.city.name;
  let weatherType = weather.list[0].weather[0].main;
  return (
    <Fragment>
      <h3 className="weather-type opacity">{weatherType}</h3>
      <div className="flex">
        <img src={img} alt="sunny" className="weather-img opacity"></img>
      </div>
      <h2 className="degree opacity">{celius}°</h2>
      <div className="city-time">
        <h4 className="city opacity">{city}</h4>
        <h5 className="time opacity">{time}</h5>
      </div>
    </Fragment>
  );
}

export default WeatherInfo;

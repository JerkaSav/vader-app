import Header from '../components/Header';
import Sunny from '../assets/weather/Sunny1.png';

function Weather() {
  return (
    <div className="grid-system">
      <Header></Header>
      <h3 className="weather-type">SOLIGT</h3>
      <div className="flex">
        <img src={Sunny} alt="sunny" className="weather-img"></img>
      </div>
      <h2 className="degree">17°</h2>
      <div className="city-time">
        <h4 className="city">GÖTELABORG</h4>
        <h5 className="time">07:00</h5>
      </div>
      <ul className="forecast">
        <li>Hej</li>
        <li>Hej</li>
        <li>Hej</li>
        <li>Hej</li>
      </ul>
    </div>
  );
}

export default Weather;

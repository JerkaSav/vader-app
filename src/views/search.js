import Header from '../components/Header';
import { setWeather } from '../actions/weatherAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const apiKey = 'c5c26cd4c52f9802b4d33b0e985957f6';
  const apiKey = 'b1b15e88fa797225412429c1c50c122a1';
  let city = '';
  let LatLong;
  async function handleClick() {
    // let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${apiKey}`;
    let url = `http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&cnt=5&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch(setWeather(data));
    history.push('/weather');
  }

  function updateCords(cords) {
    LatLong = cords;
    console.log(LatLong);
    fetchGeo();
  }

  async function fetchGeo() {
    // let url = `http://api.openweathermap.org/data/2.5/weather?lat=${LatLong.latitude}&lon=${LatLong.longitude}&appid=${apiKey}`;
    let url = `http://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${LatLong.latitude}&lon=${LatLong.longitude}&cnt=5&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch(setWeather(data));
    history.push('/weather');
  }
  return (
    <div className="grid-system">
      <Header updateCords={updateCords} />
      <input
        placholder="where are you?"
        type="text"
        onKeyUp={(event) => {
          city = event.target.value;
        }}
      />
      <button className="btn-search" onClick={handleClick}>
        VAD ÄR DET FÖR VÄDER?
      </button>
    </div>
  );
}

export default Search;

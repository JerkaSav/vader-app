import logo from '../assets/icons/logo.svg';
import geo from '../assets/icons/geolocation.svg';
import search from '../assets/icons/search-icon.svg';
import '../styles/utilities/_animations.scss';
import { useHistory } from 'react-router-dom';

function Header({ updateCords }) {
  const history = useHistory();

  let img;
  let cords;
  let animations = 'off';
  if (history.location.pathname === '/search') {
    img = geo;
    animations = 'pulse';
  } else {
    img = search;
  }
  function handleClick() {
    if (img === search) {
      history.push('/search');
    } else {
      getLocation();
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLoctaion);
    } else {
      console.log('Error');
    }
  }

  function setLoctaion(position) {
    cords = { latitude: position.coords.latitude, longitude: position.coords.longitude };
    updateCords(cords);
  }

  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => history.push('/')} />
      </div>
      <div className="search">
        <img src={img} alt="search" className={animations} onClick={handleClick} />
      </div>
    </div>
  );
}

export default Header;

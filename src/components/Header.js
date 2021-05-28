import logo from '../assets/icons/logo.svg';
import geo from '../assets/icons/geolocation.svg';
import search from '../assets/icons/search-icon.svg';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search">
        <img src={search} alt="search" />
      </div>
    </div>
  );
}

export default Header;

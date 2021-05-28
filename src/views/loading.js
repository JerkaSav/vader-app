import logo from '../assets/icons/logo.svg';
import { useHistory } from 'react-router-dom';
function Loading() {
  const history = useHistory();
  return (
    <div
      className="grid-system"
      onClick={() => {
        history.push('/search');
      }}>
      <div className="loading-screen">
        <img src={logo} alt="logo"></img>
        <h1>VÄDER APP</h1>
      </div>
    </div>
  );
}

export default Loading;

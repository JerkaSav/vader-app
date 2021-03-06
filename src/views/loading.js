// import logo from '../assets/icons/logo.svg';
import '../styles/utilities/_animations.scss';
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
        <svg className="opacity" width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="6" width="132" height="132">
            <path className="fade-in-top" d="M87.8379 6.88965L75.6489 44H68.2217L56.0845 6.88965H64.521L71.9224 31.6558L79.3496 6.88965H87.8379Z" fill="white" />
            <path className="fade-in-left" d="M137.11 87.8379L100 75.649L100 68.2217L137.11 56.0845L137.11 64.521L112.344 71.9224L137.11 79.3496L137.11 87.8379Z" fill="white" />
            <path className="fade-in-bottom" d="M56.1621 137.11L68.3511 100L75.7783 100L87.9155 137.11L79.479 137.11L72.0776 112.344L64.6504 137.11L56.1621 137.11Z" fill="white" />
            <path className="fade-in-right" d="M6.88965 56.1621L44 68.351L44 75.7783L6.88965 87.9155L6.88965 79.479L31.6558 72.0776L6.88965 64.6504L6.88965 56.1621Z" fill="white" />
            <path className="fade-in-top" d="M129.239 37.1591L94.3792 54.7812L89.1273 49.5293L106.786 14.706L112.752 20.6716L100.473 43.4174L123.237 31.157L129.239 37.1591Z" fill="white" />
            <path className="fade-in-bottom" d="M106.841 129.239L89.2188 94.3791L94.4707 89.1273L129.294 106.786L123.328 112.751L100.583 100.473L112.843 123.237L106.841 129.239Z" fill="white" />
            <path className="fade-in-bottom" d="M14.761 106.841L49.6209 89.2188L54.8727 94.4707L37.214 129.294L31.2485 123.328L43.5272 100.583L20.7631 112.843L14.761 106.841Z" fill="white" />
            <path className="fade-in-top" d="M37.1591 14.761L54.7812 49.6209L49.5293 54.8727L14.706 37.214L20.6716 31.2485L43.4174 43.5272L31.157 20.7631L37.1591 14.761Z" fill="white" />
          </mask>
          <g mask="url(#mask0)">
            <circle className="sun" cx="72" cy="72" r="65" fill="yellow" />
          </g>
        </svg>

        <h1 className="opacity">V??DER APP</h1>
      </div>
    </div>
  );
}

export default Loading;

import './styles/main.scss';
import Loading from './views/loading';
import Search from './views/search';
import Weather from './views/weather';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Loading} exact />
        <Route path="/search" component={Search} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;

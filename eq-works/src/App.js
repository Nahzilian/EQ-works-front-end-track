import './App.css';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route render={function () {
          return <p>Not found</p>
        }} />
      </Switch>
    </Router>
  );
}

export default App;

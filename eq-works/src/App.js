import './App.css';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/EQ-works-front-end-track' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

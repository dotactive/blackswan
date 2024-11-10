
import './App.css';
import Navbar  from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

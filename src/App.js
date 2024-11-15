
import './App.css';
import Navbar  from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

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
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

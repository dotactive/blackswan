
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
          <Route exact path="/blackswan">
            <Home />
          </Route>
          <Route path="/blackswan/Create">
            <Create />
          </Route>
          <Route path="/blackswan/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/blackswan/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

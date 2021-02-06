import useScript from './hooks/useScript';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NoMatch from './components/pages/errors/NoMatch';

function App() {
  //external files loading
  useScript('/lib/jquery.min.js');
  useScript('/lib/browser.min.js');
  useScript('/lib/breakpoints.min.js');
  useScript('/lib/util.js');
  useScript('/lib/main.js');

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

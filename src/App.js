import useScript from './hooks/useScript';
import useCookie from './hooks/useCookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard'
import NoMatch from './components/pages/errors/NoMatch';
import { requestHeader } from "./Redux/actions/requestHeader";

function App() {
  //external files loading
  useScript('/lib/jquery.min.js');
  useScript('/lib/browser.min.js');
  useScript('/lib/breakpoints.min.js');
  useScript('/lib/util.js');
  useScript('/lib/main.js');

  // eslint-disable-next-line
  const [cookie, updateCookie] = useCookie("access_token_anonymous");
  let hasTokenAnonymous = useCookie("access_token_anonymous")[0] !== undefined;
  const loggedIn = useCookie("access_token_admin")[0] !== undefined;

  const retrieveTokenAnonymous = async () =>{
    const response = await requestHeader();
    const payload = await response.json();
    const {token} = payload;
    updateCookie(token);
  }

  if(!hasTokenAnonymous) retrieveTokenAnonymous();
  
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            { loggedIn ? <Redirect to="admin/dashboard" /> : <Login />}
          </Route>
          <Route path="/admin/">
            <Dashboard />
          </Route>
          <Route path="/admin/article/new">
            
          </Route>
          <Route exact path="/admin/article/list">
            
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

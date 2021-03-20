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
import Dashboard from './components/pages/Dashboard';
import { requestHeader } from "./Redux/actions/requestHeader";
import Main from './components/base/Main';
import { UpdateArticleContainer, NewArticleContainer, OneArticleContainer } from './Redux/containers/ArticleContainer';
import ArticlesListContainer from './Redux/containers/ArticlesList';
import NoMatch from './components/pages/errors/NoMatch';

function App() {
  //external files loading
  useScript('/lib/jquery.min.js');
  useScript('/lib/browser.min.js');
  useScript('/lib/breakpoints.min.js');
  useScript('/lib/util.js');
  useScript('/lib/main.js');

  // eslint-disable-next-line
  const [cookieAnonymous, updateCookie] = useCookie("access_token_anonymous");
  const [cookieAdmin] = useCookie("access_token_admin");

  let hasTokenAnonymous = cookieAnonymous.value !== undefined;
  
  const loggedIn = cookieAdmin.value !== undefined;

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
          {/* authentication */}
          <Route path="/login">
            { loggedIn ? <Redirect to="admin/dashboard" /> : <Login />}
          </Route>
          {/* dashboard */}
          <Route path="/admin/">
            <Dashboard>
              <Switch>
                <Route path="/admin/article">
                  <Switch>
                    <Route path="/admin/article/list" component={ArticlesListContainer} />
                    <Route exact path="/admin/article/new" component={NewArticleContainer} />
                    <Route path="/admin/article/:id" component={UpdateArticleContainer} />
                  </Switch>
                </Route>
              </Switch>
            </Dashboard>
          </Route>
          {/* blog */}
          <Route path="/">
          <Home>

            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/article/:id">
                  <OneArticleContainer />
                </Route>
                <Route component={NoMatch} />

            </Switch>
            </Home>

          </Route>
        </Switch>
    </Router>
  );
}

export default App;

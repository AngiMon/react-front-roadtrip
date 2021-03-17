import React from 'react'
import useCookie from '../../hooks/useCookie'
import { useHistory } from "react-router-dom";
import "../../assets/dashboard.css";
import Sidebar from '../admin/Sidebar';
import {ArticlesList, NewArticleContainer} from '../../Redux/containers/ArticlesList';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Dashboard = () => {
    // eslint-disable-next-line
    const [cookie, updateCookie] = useCookie("access_token_admin");
    
    if(!cookie) return <Forbidden />
    
    return (
        <div id="roadtrip_dashboard" style={{ margin: 0}}>
            <div className="roadtrip_dashboard__topbar py-3 px-3">
                <div className="row m-0">
                    <h1 className="col-11">Je peux pas, j'ai roadtrip</h1>
                    <span className="float-right">
                        Angi Mon
                    </span>
                </div>
            </div>
            <div className="row m-0">
                <Sidebar />
                <div className="col-10 py-3 px-3">
                    <Router>
                        <Switch>
                            <Route path="/admin/article/list">
                                <ArticlesList />
                            </Route>
                            <Route path="/admin/article/new">
                                <NewArticleContainer />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

const Forbidden = () => {
    const history = useHistory();

    return (
        <div className="text-center">
            <h1 className="h1">
                Forbidden
            </h1>
            <p>
                No token, no access
            </p>

            <button className="btn btn-primary" onClick={() => history.push('/login')}> 
                Connexion 
            </button>
            
        </div>
    )
}

export default Dashboard
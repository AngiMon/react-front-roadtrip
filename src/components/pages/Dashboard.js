import React from 'react'
import useCookie from '../../hooks/useCookie'
import "../../assets/dashboard.css";
import Sidebar from '../admin/Sidebar';
import {Link} from "react-router-dom"

const Dashboard = (props) => {
    const [cookie] = useCookie("access_token_admin");
    
    if(!cookie.value) return <Forbidden />
    
    return (
        <div id="roadtrip_dashboard" style={{ margin: 0}}>
            <div className="roadtrip_dashboard__topbar py-3 px-3">
                <div className="row m-0">
                    <a className="col-11" href="/">Je peux pas, j'ai roadtrip</a>
                    <span className="float-right">
                        Angi Mon
                    </span>
                </div>
            </div>
            <div className="row m-0">
                <Sidebar />
                <div className="roadtrip_dashboard__content col-10 py-3 px-3">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const Forbidden = () => {
    return (
        <div className="text-center">
            <h1 className="h1">
                Forbidden
            </h1>
            <p>
                No token, no access
            </p>

            <Link className="btn btn-primary" to="/login"> 
                Connexion 
            </Link>
            
        </div>
    )
}

export default Dashboard
import React from 'react'
import useCookie from '../../hooks/useCookie'
import { useHistory } from "react-router-dom";
import "../../assets/dashboard.css"
import Sidebar from '../admin/Sidebar'


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
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
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
import React from 'react';
import CollapseLink from './tools/CollapseLink'

const Sidebar = () => {
    const articleLinks = [
        {href: '/admin/article/list', name:'Liste'}, 
        {href: '/admin/article/new', name:'Nouveau'}
    ];

    return (
        <div className="col-2 px-3 pt-3" id="roadtrip_dashboard__sidebar">
            <h2 className="mt-3">
                <a href="/admin/dashboard" >
                    <i className="fas fa-tachometer-alt mr-2" style={{color:"white"}}></i>
                    Tableau de bord
                </a>
            </h2>
            <hr />
            <CollapseLink 
                count="1" 
                category="Article" 
                icon={<i className="fas fa-feather"></i>}
                links={articleLinks} />
        </div>
    );  
}

export default Sidebar;

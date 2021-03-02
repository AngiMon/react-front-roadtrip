import React from 'react';
import CollapseLink from './tools/CollapseLink'

const Sidebar = () => {
    const articleLinks = [
        {href: '/admin/dashboard', name:'Liste'}, 
        {href: '/admin/dashboard', name:'Nouveau'}
    ];
    const themeLinks = [
        {href: '/admin/dashboard', name:'Suzuki'}, 
        {href: '/admin/dashboard', name:'BMW'}
    ]
    const changeTheme = (e, theme) => {
        e.preventDefault();
        console.log(theme);
    }
    return (
        <div className="col-2 px-3 pt-3" id="roadtrip_dashboard__sidebar">
            <h2 className="mt-3">
                Tableau de bord
            </h2>
            <hr />
            <CollapseLink 
                count="1" 
                category="Article" 
                links={articleLinks} />
            <CollapseLink 
                count="2" 
                category="Thème" 
                links={themeLinks}
                handleClick={changeTheme}
            />
        </div>
    );
}

export default Sidebar;

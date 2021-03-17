import React, {useState} from 'react';
import CollapseLink from './tools/CollapseLink'

const Sidebar = () => {
    const [theme, setTheme] = useState(themeSuzuki);
    const articleLinks = [
        {href: '/admin/article/list', name:'Liste'}, 
        {href: '/admin/article/new', name:'Nouveau'}
    ];
    const themeLinks = [
        {href: '/admin/dashboard', name:'Suzuki'}, 
        {href: '/admin/dashboard', name:'Honda'},
        {href: '/admin/dashboard', name:'Harley'}

    ]
    const changeTheme = (e, theme) => {
        e.preventDefault();
        
        switch(theme){
            case 'Suzuki':
                setTheme(themeSuzuki);
                break;
            case 'Honda':
                setTheme(themeHonda)
                break;
            case 'Harley':
                setTheme(themeHarley)
                break;
            default:
                setTheme(themeSuzuki);
                break
        }
    }

    return (
        <div className="col-2 px-3 pt-3" id="roadtrip_dashboard__sidebar" style={theme}>
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
            <CollapseLink 
                count="2" 
                category="Thème" 
                icon={<i className="fas fa-palette"></i>}
                links={themeLinks}
                handleClick={changeTheme}
            />
        </div>
    );

        
 
}
const themeSuzuki={
    backgroundImage: "url('../../images/gsxr.jpg')",
    backgroundSize: "cover",
    backgroundPositionX: "537px",
    color:"rgb(17 17 16)"
}
const themeHonda ={
    backgroundImage: "url('../../images/cbr.jpg')",
    backgroundSize: "cover",
    backgroundPositionX: "354px"
}

const themeHarley ={
    backgroundImage: "url('../../images/harley.jpg')",
    backgroundSize: "cover",
    backgroundPositionX: "-423px"

}
export default Sidebar;

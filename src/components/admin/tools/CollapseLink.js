import React from 'react';
import { NavLink } from "react-router-dom";

const CollapseLink = ({category, icon,  links, count, handleClick=false}) => {
    return (
        <div className="roadtrip_dashboard__sidebar__collapse card p-2 mb-2">
                <h3 role="button" data-toggle="collapse" data-target={'#collapse' + count} aria-expanded="true" aria-controls={'collapse' + count}>
                    {icon} {category}
                </h3>
                <div id={'collapse' + count} className="collapse" aria-labelledby="headingOne">
                    <ul>
                        { 
                            links.map( 
                                (link, index) => {
                                    return (
                                        elementList(index, link, handleClick)
                                    )                                            
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
    );
}

const elementList = (key, link, clickable=false) =>{
    if(clickable){
        return (
            <li onClick={(e) => clickable(e, link.name)} key={key}>
                <NavLink to={link.href}>
                    {link.name}
                </NavLink>
            </li>
        )
    }else{
        return (
            <li key={key}>
                <NavLink to={link.href}>
                    {link.name}
                </NavLink>
            </li>
        )
    }
    
}

export default CollapseLink;

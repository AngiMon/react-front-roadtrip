import React from 'react';

const CollapseLink = ({category, links, count, handleClick=null}) => {
    return (
        <div className="roadtrip_dashboard__sidebar__collapse card p-2 mb-2">
                <h3 role="button" data-toggle="collapse" data-target={'#collapse' + count} aria-expanded="true" aria-controls={'collapse' + count}>
                    {category}
                </h3>
                <div id={'collapse' + count} className="collapse" aria-labelledby="headingOne">
                    <ul>
                        { 
                            links.map( 
                                (link, index) => {
                                    return (
                                        <li onClick={(e) => handleClick(e, link.name)} key={index}>
                                            <a href={link.href}>
                                                {link.name}
                                            </a>
                                        </li>
                                    )                                            
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
    );
}

export default CollapseLink;

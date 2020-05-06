import React from 'react';
import "./css/TopNav.css";
import icon from "./media/userico.svg"

function TopNav({username}){
    return(
        <div id="topnav" className="topnav">
            <div className="icon">
            <img src={icon} alt="Logo"/><br />
            {username} 
            </div>
        </div>

    );
}


export default TopNav;

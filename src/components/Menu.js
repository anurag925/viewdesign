import React from 'react';
import { useState } from "react";
import "./css/Menu.css"


function Menu({onClick=()=>{return;},value="Button",parrent=false,href=""}){
    let [clicked, click] = useState(0);
    return(
        <div className="menu" onClick={(e) =>{
            let temp=clicked;
            if(temp===0){
                e.target.className="menu-clicked";
                click(1);
            }
            else{
                e.target.className="menu";
                click(0);
            }
            document.location.href=href
            onClick();
        }} >{value}</div> 
    );
}

export default Menu;
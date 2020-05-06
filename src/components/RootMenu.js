import React from 'react';
import { useState } from "react";
import "./css/RootMenu.css"


function RootMenu({onClick=()=>{return;},value="Button",active=false,href="",children}){
    let [clicked, click] = useState(0);
    return(
        <div className="group">
        <div className="rootmenu" onClick={(e) =>{
            let temp=clicked;
            if(temp===0){
                e.target.className="rootmenu-clicked";
                click(1);
            }
            else{
                e.target.className="rootmenu";
                click(0);
            }
            document.location.href=href
            onClick();
        }} >{value}
        </div>
        {children}
        </div>
    );
}

export default RootMenu;
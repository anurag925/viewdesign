import React from 'react';
import RootMenu from "./RootMenu";
import "./css/SideNav.css"
import Menu from './Menu';



function SideNav(){
    return(
        <div className="sidenav">
            <RootMenu value="Profile" href="/profile">
                <Menu value="Settings" href="/profile"/>
                <Menu value="Notification" href="/notification"/>
            </RootMenu>
            
            <RootMenu value="My Tasks" href="/task/1">
                <Menu value="Task 1" href="/task/1"/>
                <Menu value="Task 2" href="/task/2"/>
            </RootMenu>

            {/* <button type="button" name="profile" onClick="clickd" className="rootmenu">Profile</button>
            <button type="button" name="setting" onClick="clickd" className="menu">Settings</button>
            <button type="button" name="notification" onClick="clickd" className="menu">Notification</button>
            <button type="button" name="mytask" onClick="clickd" className="rootmenu">My Task</button>
            <button type="button" name="" onClick="clickd" className="menu">Settings</button> */}
        </div>

    );
}


export default SideNav;
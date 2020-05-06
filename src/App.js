import React from 'react';
import TN from "./components/TopNav"
import SN from "./components/SideNav"
// import FB from "./components/FormBox"
// import Label from "./components/Label"
import Profile from "./components/Profile"
import Notification from "./components/Notification"
import Task from "./components/Task"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <TN username="anurag"/>
      <div className="data" style={{display:"flex"}}>
      <SN />
      <Router>
      <Switch>
          <Route path="/profile">
          <Profile />
          </Route>
          <Route path="/notification">
          <Notification />
          </Route>
          <Route path="/task/:id">
            <Task />
          </Route>
        </Switch>
        </Router>
      

      </div>
    </div>
  );
}

export default App;

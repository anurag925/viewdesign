import React from 'react';
import "./css/Show.css";
import "./css/main.css";
import Label from "./Label"

function Notification(){

    function change(e){
        if(e.target.innerHTML==="On"){
            e.target.innerHTML="Off";
            e.target.className="off";
        }
        else{
            e.target.innerHTML="On";
            e.target.className="on";
        }
      }
    return(
        <div className="show">
            <Label value="Notification" />
            <form method="post" action=""> 
            <label style={{width:"12rem"}}>Send all alerts</label>
            <div class="main">
            <div class="on" id="slide" onClick={(e)=>change(e)}>On</div>
            </div>
            <label style={{width:"12rem"}} >Alert only Task Success</label>
            <div class="main">
            <div class="on" id="slide" onClick={(e)=>change(e)}>On</div>
            </div>
            <label style={{width:"12rem"}}>Alert only for failled tasks</label>
            <div class="main">
            <div class="on" id="slide" onClick={(e)=>change(e)}>On</div>
            </div>
            <label style={{width:"12rem"}}>I do not want any alerts</label>
            <div class="main">
            <div class="on" id="slide" onClick={(e)=>change(e)}>On</div>
            </div>
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="submit">Submit</button>
            </form>

            

        </div>

    );
}

export default Notification;
import React from 'react';
import "./css/Show.css";
import "./css/main.css";
import Label from "./Label"

function Profile(){
    return(
        <div className="show">
            <Label value="Profile Info" />
            <form method="post" action=""> 
            <label >Name</label>
            <input type="text" name="name" pattern="[A-Za-z]{30}"/>
            <label >DOB</label>
            <input type="text" name="dob" pattern ="[0-9]{4}/[0-9]{2}/[0-9]{2}" />
            <label >Profession</label>
            <input type="text" name="profession" pattern="[A-Za-z]" />
            <label >Designation</label>
            <input type="text" name="designation" pattern="[A-Za-z]"/><br/>
            <button type="submit" class="cancel">Cancel</button>
            <button type="submit" class="submit">Submit</button>
            </form>
        </div>

    );
}

export default Profile;
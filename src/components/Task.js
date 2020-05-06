import React from 'react';
import "./css/Show.css";
import "./css/main.css";
import Label from "./Label"

function Task(){
    return(
        <div className="show">
            <Label value="Task" />
            <form method="post" action=""> 
            <label>Source Name</label>
            <label>Dropdown</label>
            <label>Enable Logging</label>
            <input type="checkbox" id="cb"/>
            <label>Provide SQL</label>
            <textarea name="sql" placeholder="Provide SQL here" />
            <label>Designation</label>
            <select id="drop" defaultValue="Dropdown">
                <option value="">Dropdown</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button type="submit" class="cancel" style={{marginLeft:"6rem"}}>Cancel</button>
            <button type="submit" class="submit">Submit</button>
            <button type="submit" class="validate">Validate</button>
            </form>
        </div>

    );
}

export default Task;
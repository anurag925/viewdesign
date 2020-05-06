import React from 'react';
import "./css/Label.css"

function Label({value="label"}){

    return(
        <div className="label">{value}</div>
    );
}

export default Label;
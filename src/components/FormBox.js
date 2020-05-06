import React from 'react';
import "./css/FormBox.css";

function FormBox({method="",action="",children=""}){
    return(
        <div className="formbox">
            <form method={method} action={action}>
                <div className="forminner">
                    {children}
                </div>
            </form>
        </div>

    );
}

export default FormBox;
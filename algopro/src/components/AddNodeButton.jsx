import React from "react";

export function AddNodeButton(){
    return(
        <div className="button-wrapper">
            <label for="add-node-input">Add New Node</label>
            <input type="number" id="add-node-input" name="add-node-input"/>
            <input type="button" value="Click me"></input>
        </div>
    )
}
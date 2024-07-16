import React from "react";

export function AddNode(){
    return(
        <div>
            <label for="add-node-input">Add New Node</label>
            <input type="number" id="add-node-input" name="add-node-input"/>
            <input type="button" value="Click me"></input>
        </div>
    )
}
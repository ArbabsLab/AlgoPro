import React from "react";
import { useState } from "react";

export default function SortEngine(){
    const [arr, setArr] = useState([]);

    const randomArr = () => {
        let randArr = [];
        const size = document.getElementById("arr-slider").value;
        
        for(let i=0; i<size; i++){
            let num = Math.floor(Math.random()*50);
            randArr.push(num);
        }
        setArr(randArr);
    }

    const showBar = () => {

        
    }

    const sortBubble = () => {
        let copy = [...arr]
        let swapped = false;

        
        for(let i=0; i < copy.length - 1; i++){
            swapped = false;
            for(let j=0; j < copy.length - 1 - i; j++){
                if(copy[j] > copy[j+1]){
                    let temp = copy[j+1];
                    copy[j+1] = copy[j];
                    copy[j] = temp;
                    swapped = true;
                }
            }

            if(swapped == false){
                break;
            }
        }
            

            

        console.log(copy)
        setArr(copy);

    }


    return(
        <>
        <div className="sort-inputs">
            <div className="sort-sliders">
                <div className="slider-container">
                    <h2>Array Size</h2>
                    <input type="range" min="1" max="30" id="arr-slider" className="slider"/>
                </div>
                
                <div className="slider-container">
                    <h2>Sort Speed</h2>
                    <input type="range" min="1" max="50" id="speed-slider" className="slider"/>
                </div>

                <button className="sort-btn" onClick={randomArr}><h2>Generate Array</h2></button>
            </div>

            <div className="sort-btns">
                <button className="sort-btn" onClick={sortBubble}><h2>Bubble</h2></button>
                <button className="sort-btn"><h2>Quick</h2></button>
                <button className="sort-btn"><h2>Merge</h2></button>
                <button className="sort-btn"><h2>Insertion</h2></button>
            </div>
        </div>

        <div className="container-sort">
            {
                arr.map(function(val, key){
                    return(
                        <div className="arr-data">
                            <div className="arr-val">{val}</div>
                            <div className="arr-bar" style={{
                                height: `${val*2}px` }}></div>
                        </div>
                    )
                })
            }
            
        </div>
        
        </>
    )
}
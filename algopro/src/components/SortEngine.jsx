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
        console.log(randArr);
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
                <button className="sort-btn"><h2>Bubble</h2></button>
                <button className="sort-btn"><h2>Quick</h2></button>
                <button className="sort-btn"><h2>Merge</h2></button>
                <button className="sort-btn"><h2>Insertion</h2></button>
            </div>
        </div>

        <div className="container-sort">
            {
                arr.map(function(val, key){
                    let tall = val;
                    console.log(tall);
                    return(
                        <div className="arr-data">
                            <div className="arr-val">{val}</div>
                            <div className="arr-bar" style={{
                                height: `${val*2}px`
            }}></div>
                        </div>
                    )
                })
            }
        </div>
        
        </>
    )
}
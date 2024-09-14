import React from "react";
import { useState } from "react";

export default function SortEngine(){
    const [arr, setArr] = useState([]);
    const [swapArr, setSwapArr] = useState([]);


    const randomArr = () => {
        let randArr = [];
        const size = document.getElementById("arr-slider").value;
        
        for(let i=0; i<size; i++){
            let num = Math.floor(Math.random()*50);
            randArr.push(num);
        }
        setArr(randArr);
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
        setArr(copy);
    }

    const sortInsertion = () => {
        let copy = [...arr];

        for(let i = 1; i<copy.length; i++){
            let val = copy[i];
            let j = i-1;
            while(val < copy[j] && j>=0){
                let temp = copy[j+1];
                copy[j+1] = copy[j];
                copy[j] = temp;
                j -= 1;
            }
        }

        setArr(copy);
    }
    
    function partitionSort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        let pivot = array[0];
        
        let left = []; 
        let right = [];
      
        for (let i = 1; i < array.length; i++) {
          array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
      
        return partitionSort(left).concat(pivot, partitionSort(right));
    }

    const sortQuick = () => {
        let copy = [...arr];

        setArr(partitionSort(copy));
    }
    function merge(left, right){
        let sortedArr = [];

        while(left.length && right.length){
            if(right[0] < left[0]){
                sortedArr.push(right.shift())
            }
            else{
                sortedArr.push(left.shift())
            }
        }

        return [...sortedArr, ...left, ...right];
    }

    function partitionMerge(array){
        if (array.length <= 1){
            return array;
        }
        let mid = Math.floor(array.length / 2);
        let left = partitionMerge(array.slice(0, mid));
        let right = partitionMerge(array.slice(mid));

        return merge(left, right);
    }

    const sortMerge = () => {
        let copy = [...arr];

        console.log(partitionMerge(copy))
        setArr(partitionMerge(copy))
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
                <button className="sort-btn" onClick={sortInsertion}><h2>Insertion</h2></button>
                <button className="sort-btn" onClick={sortMerge}><h2>Merge</h2></button>
                <button className="sort-btn" onClick={sortQuick}><h2>Quick</h2></button>
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
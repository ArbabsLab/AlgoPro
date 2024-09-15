import React from "react";
import { useState } from "react";

export default function SortEngine(){
    const [arr, setArr] = useState([]);
    const [sortState, setSortState] = useState(false);
    const [sortSpeed, setSortSpeed] = useState(50);

    const randomArr = () => {
        let randArr = [];
        const size = document.getElementById("arr-slider").value;
        
        for(let i=0; i<size; i++){
            let num = Math.floor(Math.random()*50);
            randArr.push(num);
        }
        setArr(randArr);
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

   
    
    const sortBubble = async () => {
        setSortState(true);
        let copy = [...arr];
        let swapped = false;
        for(let i=0; i < copy.length - 1; i++){
            swapped = false;
            for(let j=0; j < copy.length - 1 - i; j++){
                if(copy[j] > copy[j+1]){
                    let temp = copy[j+1];
                    copy[j+1] = copy[j];
                    copy[j] = temp;
                    swapped = true;

                    setArr([...copy]);
                    await delay(sortSpeed);
                }
            }
            
            if(swapped == false){
                break;
            }
            
        }
        setSortState(false);
    }

    const sortInsertion = async () => {
        setSortState(true);
        let copy = [...arr];

        for(let i = 1; i<copy.length; i++){
            let val = copy[i];
            let j = i-1;
            while(val < copy[j] && j>=0){
                //let temp = copy[j+1];
                copy[j+1] = copy[j];
                //copy[j] = temp;
                j -= 1;
                setArr([...copy]);
                await delay(sortSpeed);
            }
            copy[j+1] = val;
            setArr([...copy]);
            await delay(sortSpeed);
        }

        setSortState(false);
    }
    
    async function partitionSort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        let pivot = array[0];
        
        let left = []; 
        let right = [];
      
        for (let i = 1; i < array.length; i++) {
            await delay((sortSpeed * 0.00000000001));
            array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
        left = await (partitionSort(left));
        right = await (partitionSort(right));

        let sortedArr = left.concat(pivot, right);
        setArr([...sortedArr]);
        await delay(sortSpeed);

        return sortedArr;
        //return partitionSort(left).concat(pivot, partitionSort(right));
    }

    const sortQuick = async () => {
        setSortState(true);
        let copy = [...arr];

        await partitionSort(copy);
        setSortState(false);
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

        setArr(partitionMerge(copy))
    }

    return(
        <>
        <div className="sort-inputs">
            <div className="sort-sliders">
                <div className="slider-container">
                    <h2>Array Size</h2>
                    <input type="range" min="1" max="20" id="arr-slider" className="slider"/>
                </div>
                
                <div className="slider-container">
                    <h2>Sort Speed</h2>
                    <input type="range" min="200" max="400" id="speed-slider" onChange={(e) => setSortSpeed(550 - e.target.value)} className="slider"/>
                </div>

                <button className="sort-btn" onClick={randomArr}><h2>Generate Array</h2></button>
            </div>

            <div className="sort-btns">
                <button className="sort-btn" onClick={sortBubble} disabled={sortState}><h2>Bubble</h2></button>
                <button className="sort-btn" onClick={sortInsertion} disabled={sortState}><h2>Insertion</h2></button>
                <button className="sort-btn" onClick={sortMerge} disabled={sortState}><h2>Merge</h2></button>
                <button className="sort-btn" onClick={sortQuick} disabled={sortState}><h2>Quick</h2></button>
            </div>
        </div>

        <div className="container-sort">
            {
                arr.map(function(val, key){
                    return(
                        <div className="arr-data" key={key}>
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
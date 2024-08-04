import React from 'react'
import { useState } from 'react'

export default function BubbleSort() {

    const [node, setNode] = useState("")
    const [data, setData] = useState([])
    const [original, setOriginal] = useState([])

    const nodeChange = (event) => {
        setNode(event.target.value)
        
    }

    const dataSubmit = () => {
        setData([...data, Number(node)]); 
        setNode("")
        setOriginal([...data, Number(node)]);
    }

    const resetData = () => {
        setData([...original])
    }

    const clearData = () => {
        setData([])
        setOriginal([])
    }

    
    const bubbleSort = () => {
        const arr = [...data];
        let n = arr.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
            n--; 
        } while (swapped);

        setData(arr);
    };

    const insertionSort = () => {
        const arr = [...data];
        const n = arr.length;

        for(let i=0; i<n; i++){
            const num = arr[i];

            for(let j=i; j>= 0; j--){
                if(num < arr[j]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                
            }

        }
        
        setData(arr);
    }

    function qs(array){
        if (array.length <= 1){
            return array;
        }

        let pivot = array[0];
        let leftArr = [];
        let rightArr = [];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
            leftArr.push(array[i]);
            } else {
            rightArr.push(array[i]);
            }
        }

        return [...qs(leftArr), pivot, ...qs(rightArr)];
    };
    

    const quickSort = () => {
        const arr = [...data];

        const sorted = qs(arr);
        
        
        setData(sorted);
    }

    function merge(leftArr, rightArr) {
        let sortedArray = [];
        
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] < rightArr[0]) {
                sortedArray.push(leftArr.shift());
            } else {
                sortedArray.push(rightArr.shift());
            }
        }
        
        return [...sortedArray, ...leftArr, ...rightArr];
    }
    
    function ms(array) {
        if (array.length <= 1) {
            return array;
        }
        
        const mid = Math.floor(array.length / 2);
        const leftArr = ms(array.slice(0, mid));
        const rightArr = ms(array.slice(mid));
        
        return merge(leftArr, rightArr);
    }

    const mergeSort = () => {
        const arr = [...data];

        const sorted = ms(arr);

        setData(sorted);
    }

    
   

    return (
        <>
        <div className="prelim-sort-buttons">
            <div className="add-node-container">
                <label for='insert-node'>Add Number</label>
                <input type="text" value={node} name='insert-node' onChange={nodeChange}></input>
            </div>
            <button className='sort-btn' onClick={dataSubmit}>Add</button>
            <button className='sort-btn' onClick={resetData}>Reset</button>
            <button className='sort-btn' onClick={clearData}>Clear</button>
        </div>
        
        <div className='container-sort'>
            {
                data.map((num) => 
                    <div className='data-bar'>
                    <h3>{num}</h3>
                    <div style={{
                        display: 'flex',
                        background:'#22223b',
                        width: '25px',
                        height: `${num * 2}px`,
                        color: 'white',
                        alignItems: 'center',
                        
                    }}
                    ></div>
                    </div>
                )
            }
        </div>

        <div className="alg-btn-sort">
            <button className='sort-btn' onClick={bubbleSort}>Bubble Sort</button>
            <button className='sort-btn' onClick={insertionSort}>Insertion Sort</button>
            <button className='sort-btn' onClick={quickSort}>Quick Sort</button>
            <button className='sort-btn' onClick={mergeSort}>Merge Sort</button>
        </div>
        
        </>
        
    )
}

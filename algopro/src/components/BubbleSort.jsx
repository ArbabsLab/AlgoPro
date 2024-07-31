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

    const quickSort = () => {
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

    const mergeSort = () => {

    }
   

    return (
        <>
        <div className="prelim-sort-buttons">
            <label for='insert-node'>Add Number</label>
            <input type="text" value={node} name='insert-node' onChange={nodeChange}></input>
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

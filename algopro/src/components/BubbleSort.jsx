import React from 'react'
import { useState } from 'react'

export default function BubbleSort() {
    const maxNum = 100
    const minNum = 0

    const [node, setNode] = useState(0)
    const [data, setData] = useState([])

    const nodeChange = (event) => {
        setNode(event.target.value)
        
    }

    const dataSubmit = () => {
        setData([...data, node])
        setNode(0)
    }

    const resetData = () => {
        setData([])
        console.log(data)
    }

   

    return (
        <>
        <div className="prelim-sort-buttons">
            <label for='insert-node'>Add Number({minNum} - {maxNum})</label>
            <input type="number" value={node} name='insert-node' onChange={nodeChange}></input>
            <button className='sort-btn' onClick={dataSubmit}>Add</button>

            <button className='sort-btn' onClick={resetData}>Reset</button>
        </div>
        
        <div className='container-sort'>
            {
                data.map((num, idx) => 
                    <div className='data-bar'>
                    <h3>{num}</h3>
                    <div key={idx} style={{
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
        </>
        
    )
}

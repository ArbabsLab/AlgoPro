import React from 'react'

export default function BubbleSort() {
    const maxNum = 100
    const minNum = 0

    return (
        <>
        <div className="prelim-sort-buttons">
            <label for='insert-node'>Add Number({minNum} - {maxNum})</label>
            <input type="number" min={minNum} max={maxNum} name='insert-node'></input>
            <button id='add-btn' className='sort-btn'>Add</button>

            <button id='reset-btn' className='sort-btn'>Reset</button>
        </div>
        
        <div className='container-sort'></div>
        </>
        
    )
}

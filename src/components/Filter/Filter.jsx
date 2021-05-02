import React from 'react';
import './Filter.css'

export default function Filter(){

    return (
        <div className='filter-container'>
            <p className='filter-item'>All Games</p>
            <p className='filter-item'>Adventure</p>
            <p className='filter-item'>Cooperative</p>
            <p className='filter-item'>Family Games</p>
            <p className='filter-item'>Fantasy</p>
            <p className='filter-item'>Historic</p>
            <p className='filter-item'>Horror</p>
            <p className='filter-item'>Mature</p>
            <p className='filter-item'>Party Games</p>
        </div>
    )
}
import React from 'react';
import carsItem from './carsItem.css'

export default function CarsItem({ id, name, latitude, longitude}) {
    return (
        <div className='carsItemWrapper'>
            <a className='carsItem'>
                <h2>Model: {name}</h2>
                <h3>Id:{id}</h3>
                <h4>latitude: {latitude}</h4>
                <h4>longitude: {longitude}</h4>
            </a>
        </div>

    )
}
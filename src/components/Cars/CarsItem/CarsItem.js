import React from 'react';
import './carsItem.css'

export default function CarsItem({ id, name, latitude, longitude }) {
    return (
        <div className='carsItemWrapper'>
            <div className='carsItem'>
                <h3>Model: {name}, Id:{id}</h3>
                <div>
                    <p>Latitude : {latitude}, Longitude: {longitude}</p>
                </div>
            </div>
        </div>
    )
}
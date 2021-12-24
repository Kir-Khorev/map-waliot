import React from 'react';
import carsItem from './carsItem.css'

export default function CarsItem({ id, name, latitude, longitude }) {
    return (
        <div className='carsItemWrapper'>
            <div className='carsItem'>
                <h3>Model: {name}, Id:{id}</h3>
                <div>
                    <h4>Координаты:</h4>
                    <p>Широта: {latitude}, Долгота: {longitude}</p>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
// import './carsItem.css'
import classes from '../../../styles/carsitem.module.css';

export default function CarsItem({ id, name, latitude, longitude }) {
    return (
        <div className={classes.carsItemWrapper}>
            <div className={classes.carsItem}>
                <h3>Model: {name}, Id:{id}</h3>
                <div>
                    <p className={classes.latitude}>Latitude : {latitude}, Longitude: {longitude}</p>
                </div>
            </div>
        </div>
    )
}
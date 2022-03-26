import React, { useEffect, useState, useMemo } from 'react';
import classes from '../../styles/map.module.css';
import dynamic from "next/dynamic"
import carsData from '../api/carsData';

export default function Map({ cars: servCars }) {
    const [cars, setCars] = useState(servCars);
    const MapWithNoSSR = dynamic(() => import("./MapNoSSR.js"), {
        ssr: false
    })

    // Check load data from API
    useEffect(() => {
        carsData()
        async function load() {
            const json = await carsData()
            setCars(json)
        }
        if (!servCars) {
            load()
        }
    }, [])

    if (!cars) return <h1>Loading cars list...</h1>

    return (
        <div className={classes.mapWrapper}>
            <MapWithNoSSR cars={cars} />
        </div>
    )
}
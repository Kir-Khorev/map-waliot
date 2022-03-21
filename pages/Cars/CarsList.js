import React, { useEffect, useState, useCallback } from 'react';
import CarsItem from './CarsItem/CarsItem';

export default function CarsList({ map, cars, onClickFunc }) {
    const zoom = 10;
    const [position, setPosition] = useState(0);

    // useEffect(() => {
    //     map.on('move', onMove)
    //     return () => {
    //         map.off('move', onMove)
    //     }
    // }, [map, onMove])

    if (!map) {
        return <h2>Loading is map list...</h2>
    }

    // const onClickFunc = useCallback((center) => {
    //     map.setView(center, zoom)
    // }, [map])

    // const onMove = useCallback(() => {
    //     setPosition(map.getCenter())
    // }, [map])

    return (
        <div className='carsList'>
            <h1>Available cars</h1>
            {
                cars.map(e => {
                    const center = [e.latitude, e.longitude]
                    return <div key={e.id} onClick={() => onClickFunc(center)} >
                        <CarsItem carsList={cars} id={e.id} name={e.name} latitude={e.latitude} longitude={e.longitude} />
                    </div>
                })
            }
        </div>
    )
}
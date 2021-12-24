import React, { useEffect, useState, useCallback } from 'react';
import CarsItem from './CarsItem/CarsItem';
import './CarsList.css';

export default function CarsList({ map, cars }) {
    const zoom = 10;
    const [position, setPosition] = useState(map.getCenter());

    const onClickFunc = useCallback((center) => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <div className='carsList'>
            <h1>Доступные машины</h1>
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
import React, { useEffect, useState } from 'react';
import CarsItem from './CarsItem/CarsItem';
import carsData from '../../services/carsData';

export default function CarsList(props) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
            .then((response) => response.json())
            .then((json) => {
                setCars(json)
            })
            .catch(err => {
                console.log('err', err);
            })
    }, []);

    return (
        <div div className='carsList' >
            <h1>Объекты</h1>
            {
                cars.map(e => {
                    return <CarsItem key={e.id} name={e.name} latitude={e.latitude} longitude={e.longitude} />
                })
            }
        </div>
    )
}


import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import CarsItem from '../Cars/CarsItem/CarsItem';

export default function Map(props) {

    const [cars, setCars] = useState([]);

    // Load data from API
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

    const localFunc = () => {
        console.log(123);
        return
    };

    return (
        <>
            <div id="map">
                <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        cars.map(elem => {
                            return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} onClick={localFunc} >
                                <Popup>{elem.name}, {elem.id}</Popup>
                            </Marker>
                        })
                    }
                </MapContainer>
            </div>
            <div div className='carsList'>
                <h1>Объекты</h1>
                {
                    cars.map(e => {
                        return <div onClick={localFunc}>
                            <CarsItem onClick={localFunc} carsList={cars} key={e.id} id={e.id} name={e.name} latitude={e.latitude} longitude={e.longitude} />
                        </div>
                    })
                }
            </div>
        </>
    )
}
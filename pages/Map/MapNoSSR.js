import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from '../../styles/map.module.css';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import CarsList from '../Cars/CarsList';

const MapNoSSR = ({ cars }) => {
    const [map, setMap] = useState(0);
    const zoom = 10;
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        async function load() {
            setMap(map)
        }
        if (!map) {
            load()
        }
    }, [])

    
    if (!cars && !map) {
        return <h2>Loading is map...</h2>        
    }

    const onClickFunc = useCallback((center) => {
        map.setView(center, zoom)
    }, [map])

    return (
        <>
            <MapContainer map={map} center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} whenCreated={setMap}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    cars.map(elem => {
                        return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
                            <Popup>{elem.name}, {elem.id}</Popup>
                        </Marker>
                    })
                }
            </MapContainer>
            <CarsList map={map} cars={cars} onClickFunc={onClickFunc} />
        </>
    );
};

export default MapNoSSR;
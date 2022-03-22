import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import CarsList from '../Cars/CarsList';

const MapNoSSR = ({ cars }) => {
    const [map, setMap] = useState(0);
    const zoom = 15;
    const [position, setPosition] = useState(0);

    useEffect(() => {
        async function load() {
            setMap(map)
        }
        if (!map) {
            load()
        }
    }, [map])

    if (!cars && !map) return <h2>Map is Loading...</h2>

    // const onClickFunc = useCallback((center, e) => {
    //     map.setView(center, zoom)
    // }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    return (
        <>
            <MapContainer map={map} center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} whenCreated={setMap}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    cars.map(elem => {
                        return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
                            <Popup>
                                {elem.name}, {elem.id}
                            </Popup>
                        </Marker>
                    })
                }
            </MapContainer>
            <CarsList map={map} cars={cars} onMove={onMove} />
        </>
    );
};

export default MapNoSSR;
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import CarsList from '../Cars/CarsList';
// import '../../node_modules/leaflet/dist/leaflet.css'
// import '../../node_modules/leaflet-defaulticon-compatibility';
import carsData from '../api/carsData';

const MapNoSSR = ({ cars: servCars }) => {
    const [cars, setCars] = useState(servCars);

    const [map, setMap] = useState(0);
    // const zoom = 15;
    // const [position, setPosition] = useState(0);
    console.log(map)

    useEffect(() => {
        carsData()
        async function load() {
            const json = await carsData()
            setCars(json)
            setMap(map)
        }
        // async function load() {
        //     setMap(map)
        // }
        if (!servCars && !map) {
            load()
        }
        // if (!map) {
        //     load()
        // }
    }, [map])

    if (!cars) return <h2>Map is Loading...</h2>

    // const onMove = useCallback(() => {
    //     setPosition(map.getCenter())
    // }, [map])

    return (
        <>
            <MapContainer style={{height: 400, width: "100%"}} map={map} center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} whenCreated={setMap}>
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
            <CarsList map={map} cars={cars}  />
        </>
    );
};

export default MapNoSSR;
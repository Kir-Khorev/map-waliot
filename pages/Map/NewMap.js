// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
// import CarsList from '../Cars/CarsList';
// import carsData from '../api/carsData';

const NewMap = () => {
    // const [cars, setCars] = useState(servCars);

    // const [map, setMap] = useState(0);
    // // const zoom = 15;
    // // const [position, setPosition] = useState(0);

    // useEffect(() => {
    //     carsData()
    //     async function load() {
    //         const json = await carsData()
    //         setCars(json)
    //         setMap(map)
    //     }
    //     // async function load() {
    //     //     setMap(map)
    //     // }
    //     if (!servCars && !map) {
    //         load()
    //     }
    //     // if (!map) {
    //     //     load()
    //     // }
    // }, [map])

    // if (!cars) return <h2>Map is Loading...</h2>

    // const onMove = useCallback(() => {
    //     setPosition(map.getCenter())
    // }, [map])

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <MapContainer center={[40.8054, -74.0241]} zoom={14} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
                <Marker
                    position={[40.8054, -74.0241]}
                    draggable={true}
                    animate={true}
                >
                    <Popup>
                        Hey ! you found me
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
};

export default NewMap;

// export async function getStaticProps(ctx) {
//     // if (!ctx.req) {
//     //     return { cars: null }
//     // }

//     const res = await fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
//     const cars = await res.json()

//     return {
//         props: {
//             cars
//         }
//     }
// }

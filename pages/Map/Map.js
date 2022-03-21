import React, { useEffect, useState, useMemo } from 'react';
import classes from '../../styles/map.module.css';
import CarsList from '../Cars/CarsList';
import { useRouter } from "next/router";
import dynamic from "next/dynamic"

export default function Map({ cars: servCars }) {
    const [cars, setCars] = useState(servCars);
    const MapWithNoSSR = dynamic(() => import("./MapNoSSR.js"), {
        ssr: false
    })
    // const [map, setMap] = useState(0);
    // const router = useRouter();

    // Load data from API
    useEffect(() => {
        async function load() {
            const res = await fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
            const json = await res.json()
            setCars(json)
        }
        if (!cars) {
            load()
        }
    }, [])

    if (!cars) {
        return <h1>Loading cars list...</h1>
    }

    // const displayMap = useMemo(
    //     () => (
    // <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} whenCreated={setMap}>
    //     <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //     {
    //         cars.map(elem => {
    //             return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
    //                 <Popup>{elem.name}, {elem.id}</Popup>
    //             </Marker>
    //         })
    //     }
    // </MapContainer>
    //     ), [cars],
    // )


    return (
        <div className={classes.mapWrapper}>
            <MapWithNoSSR cars={cars} />
            {/* <CarsList cars={cars} /> */}
            {/* <div id="map">
                {cars.length ? displayMap : <div>Load...</div>}
            </div> */}
            {/* <CarsList cars={cars} /> */}
            {/* {map ? <CarsList map={map} cars={cars} /> : <div>Load cars List...</div>} */}
        </div>
    )
}

export async function getServerSideProps(context) {
    if (!context.req) {
        return { cars: null }
    }

    const res = await fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
    const cars = await res.json()

    return {
        props: {
            cars
        }
    }
}

// Map.getInitialProps = async (context) => {
//     if (!context.req) {
//         return { cars: null }
//     }

//     const res = await fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
//     const cars = await res.json()

//     return {
//         props: {
//             cars
//         }
//     }
// }
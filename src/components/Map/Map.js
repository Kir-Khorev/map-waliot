import React, { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import CarsList from '../Cars/CarsList';

export default function Map (props) {
    const [cars, setCars] = useState([]);

    // Load data from API
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json')
            .then((response) => response.json())
            .then(json => setCars(json))
            .catch(err => console.error('Error:', err))
    }, []);

    const [map, setMap] = useState(null);

    const displayMap = useMemo(
        () => (
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} whenCreated={setMap}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    cars.map(elem => {
                        return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
                            <Popup>{elem.name}, {elem.id}</Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        ),[cars],
    )

    return (
        <div className='mapWrapper'>
            <div id="map">
                {cars.length ? displayMap : <div>Load...</div>}
            </div>
            {map ? <CarsList map={map} cars={cars} /> : <div>Load cars List...</div>}
        </div>
    )
}
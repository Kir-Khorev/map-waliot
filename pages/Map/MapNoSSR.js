import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from '../../styles/map.module.css';

const MapNoSSR = ({ cars }) => {
    console.log(cars);

    if (!cars) {
        return (
            <h1>Load...</h1>
        )
    }

    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={true} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    cars.map(elem => {
                        return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
                            <Popup>{elem.name}, {elem.id}</Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        </>
    );
};

export default MapNoSSR;
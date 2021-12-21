import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import CarsItem from '../Cars/CarsItem/CarsItem';


export default function Map(props) {
    const [cars, setCars] = useState([]);

    function DisplayPosition({ map }) {
        const zoom = 10

        const [position, setPosition] = useState(map.getCenter())

        const onClickFunc = useCallback((myCenter) => {
            map.setView(myCenter, zoom)
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
            <div div className='carsList'>
                <h1>Объекты</h1>
                {
                    cars.map(e => {
                        const centerThis = [e.latitude, e.longitude]
                        return <div onClick={() => onClickFunc(centerThis)} >
                            <CarsItem carsList={cars} key={e.id} id={e.id} name={e.name} latitude={e.latitude} longitude={e.longitude} />
                        </div>
                    })
                }
            </div>
        )
    }

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

    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <MapContainer center={[51.505, -0.09]} zoom={4}
                scrollWheelZoom={true}
                whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    cars.map(elem => {
                        return <Marker key={elem.id} position={[elem.latitude, elem.longitude]} >
                            <Popup>{elem.name}, {elem.id}</Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        ),
        [],
    )

    return (
        <div className='mapWrapper'>
            <div id="map">
                {displayMap}
            </div>
            {map ? <DisplayPosition map={map} /> : null}
        </div>
    )
}
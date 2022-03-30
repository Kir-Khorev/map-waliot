import React, { useEffect, useState, useCallback } from 'react';
import CarsItem from './CarsItem/CarsItem';
import './CarsList.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CarRentalIcon from '@mui/icons-material/CarRental';

export default function CarsList({ map, cars }) {
    const zoom = 10;
    const [position, setPosition] = useState(map.getCenter());

    const onClickFunc = useCallback((center) => {
        map.setView(center, zoom)
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
        <div className='carsList'>
            <h3>Available cars</h3>
            <Divider />
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            cars.map(e => {
                                const center = [e.latitude, e.longitude]
                                return <ListItem disablePadding key={e.id} onClick={() => onClickFunc(center)} >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CarRentalIcon />
                                        </ListItemIcon>
                                        <ListItemText />
                                        <CarsItem carsList={cars} id={e.id} name={e.name} latitude={e.latitude} longitude={e.longitude} />
                                    </ListItemButton>
                                </ListItem>
                            })
                        }
                    </List>
                </nav>
            </Box>
        </div>
    )

}
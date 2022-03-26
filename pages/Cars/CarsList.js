import React, { useEffect, useState, useCallback } from 'react';
import CarsItem from './CarsItem/CarsItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CarRentalIcon from '@mui/icons-material/CarRental';

export default function CarsList({ map, cars }) {
    console.log(map)

    // if (!map) {
    //     return <h2>Loading is map list...</h2>
    // }

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
                                const zoom = 10;
                                return <ListItem disablePadding key={e.id} onClick={() => map.setView(center, zoom)}>
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
import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material'

import Sidebar from "./Sidebar";
import Maps from "./Map";
import ControlButtons from "./ControlButtons";
import TimelinePage from "./TimelinePage";

const Main = () => {

    const [zoomedLocation, setZoomedLocation] = useState({lat: 11.15405761270903, lng: 122.48382568359376})
    const [zoom, setZoom] = useState(9)
    const [mapType, setMapType] = useState("street");
    const [sites, setSites] = useState({
        BLC: true,
        MAR: true,
        UMI: true,
        PEP: true,
        INA: true,
    })
    const [filters, setFilters] = useState({
        RG: true,
        SS: true,
        EQ: true
    })

    return(
        <Grid>
            <ControlButtons 
                mapType={mapType}
                setMapType={setMapType}
                filters={filters}
                setFilters={setFilters}
                setZoomedLocation={setZoomedLocation}
                setZoom={setZoom}
                zoom={zoom}
            />
            <Sidebar
                zoomedLocation={zoomedLocation}
                setZoomedLocation={setZoomedLocation}
                setZoom={setZoom}
                sites={sites}
                zoom={zoom}
                />
            <Maps 
                mapType={mapType} 
                sites={sites}
                filters={filters}
                zoomedLocation={zoomedLocation}
                zoom={zoom}
            />
        </Grid>       
    )
    
}

export default Main;
import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material'

import Sidebar from "./Sidebar";
import Maps from "./Map";

const Main = () => {

    const [zoomedLocation, setZoomedLocation] = useState({lat: 11.15405761270903, lng: 122.48382568359376})
    const [zoom, setZoom] = useState(9)
    const [mapType, setMapType] = useState("street");
    const [sites, setSites] = useState({
        LPA: true,
        MAR: true,
        UMI: true
    })
    const [filters, setFilters] = useState({
        RG: true,
        SM: true,
        SS: true
    })
    
    return(
        <Grid>
            <Sidebar
                setZoomedLocation={setZoomedLocation}
                setZoom={setZoom}
                zoom={zoom} />
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
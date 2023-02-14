import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material'

import Sidebar from "./Sidebar";
import Maps from "./Map";
import ControlButtons from "./ControlButtons";

const Main = () => {

    const [mapType, setMapType] = useState("street");
    const [sites, setSites] = useState({
        LPA: true,
        MAR: true,
        UMI: true
    })
    const [filters, setFilters] = useState({
        RG: true,
        SS: true,
        EQ: true
    })

    return(
        <Grid>
            <Sidebar />
            <ControlButtons 
                mapType={mapType}
                setMapType={setMapType}
                filters={filters}
                setFilters={setFilters}
            />
            <Maps 
                mapType={mapType} 
                sites={sites}
                filters={filters}
            />
        </Grid>       
    )
    
}

export default Main;
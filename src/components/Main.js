import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material'

import Sidebar from "./Sidebar";
import Maps from "./Map";

const Main = () => {

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
            <Sidebar />
            <Maps 
                mapType={mapType} 
                sites={sites}
                filters={filters}
            />
        </Grid>       
    )
    
}

export default Main;
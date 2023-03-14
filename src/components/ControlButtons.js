import React, { Fragment, useState, useEffect } from "react";
import { Grid, Typography, Button, Fab, IconButton, Stack } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import datalogger_rg from '../assets/datalogger_w_rg.png'

const ControlButtons = (props) => {
    const { mapType, setMapType, filters, setFilters, setZoom, setZoomedLocation, zoom } = props 

    return(
        <Grid>
            <Grid
                style={{
                    zIndex: 1,
                    position: "absolute",
                    bottom: 35,
                    left: '2%',
                }}
            >   
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" size="small" style={{backgroundColor: mapType==="street" ? '#F8991D': '#16526D'}}
                        onClick={() => {setMapType('street')}}
                    >Street View</Button>
                    <Button variant="contained" size="small" style={{backgroundColor: mapType==="terrain" ? '#F8991D': '#16526D'}}
                        onClick={() => {setMapType('terrain')}}
                    >Terrain View</Button>

                
                    <Tooltip title="Rain Gauge" placement="top" arrow>
                        <IconButton style={{backgroundColor: filters.RG === true ? '#F8991D': '#16526D'}}
                            onClick={( )=> {
                                let tempFilters = {...filters}
                                if(filters.RG===true){
                                    tempFilters.RG = false
                                }
                                else{
                                    tempFilters.RG = true
                                }
                                setFilters(tempFilters)
                            }}
                        >
                            <img src={require('../markers/raingauge2.png')} style={{width: 25}}/>
                        </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="Subsurface Sensor" placement="top" arrow>
                        <IconButton style={{backgroundColor: filters.SS === true ? '#F8991D': '#16526D'}}
                            onClick={( )=> {
                                let tempFilters = {...filters}
                                if(filters.SS === true){
                                    tempFilters.SS = false
                                }
                                else{
                                    tempFilters.SS = true
                                }
                                setFilters(tempFilters)
                            }}
                        >
                            <img src={datalogger_rg} alt='datalogger' style={{width: 25, height: 25}}/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Earthquage Epicenter" placement="top" arrow>
                        <IconButton style={{backgroundColor: filters.EQ === true ? '#F8991D': '#16526D'}}
                            onClick={( )=> {
                                let tempFilters = {...filters}
                                if(filters.EQ===true){
                                    tempFilters.EQ = false
                                }
                                else{
                                    tempFilters.EQ = true
                                }
                                setFilters(tempFilters)
                            }}
                        >
                            <img src={require('../markers/earthquake.png')} style={{width: 25}}/>
                        </IconButton>
                    </Tooltip>
                        <Button variant="contained"
                                onClick={e => {
                                setZoomedLocation({lat: 11.15405761270903, lng: 122.48382568359376})
                                setZoom(9)
                                }}
                                sx={{margin: 9, backgroundColor: '#F8991D'}}>
                                Reset zoom
                        </Button>
                </Stack>
            
            </Grid>
        </Grid>
    )
}

export default ControlButtons;
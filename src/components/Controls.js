import { Container } from '@mui/system';
import React, {Fragment, useState, useEffect} from 'react';

import Header from './Header';
import {
    Card, CardContent, Typography, Grid, Paper, Divider
} from '@mui/material'

import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Controls = () => {


    return(
        <Fragment>
            <Header />
            <Grid sx={{flexGrow: 1}}>
                <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'row', padding: 2}}>
                    <Grid item xs={3}>
                        <Card sx={{height: '85vh', width: '100%'}}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    Sites
                                </Typography>
                                <Divider />
                                <Grid style={{paddingLeft: 30}}>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Marirong</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Lipata</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Umingan</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: '85vh', width: '100%'}}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    Data
                                </Typography>
                                <Divider />
                                <Grid style={{paddingLeft: 30}}>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Subsurface Sensors</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Rain Gauge</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    {/* <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">DOST-ASTI Gauge</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid> */}
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Earthquake</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Hazard Area</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            control={<Switch color="primary" defaultChecked/>}
                                            label={<Typography variant="h5">Households</Typography>}
                                            labelPlacement="end"
                                            style={{paddingTop: 20}}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: '85vh', width: '100%'}}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    Current Events
                                </Typography>
                                <Divider />
                                <Grid style={{paddingLeft: 30}}>
                                    <Grid style={{paddingTop: 20, paddingBottom: 20}}>
                                        <Typography variant='h5'> Marirong</Typography>
                                        <Card>
                                            <Typography variant='h5' textAlign={'center'} style={{backgroundColor:'yellow'}}>Alert 1</Typography>
                                            <Typography variant='h6'>Date: 06 February 2023</Typography>
                                            <Typography variant='h6'>Time: 11:30</Typography>
                                            <Typography variant='h6'>Triggers: Rainfall</Typography>
                                        </Card>
                                    </Grid>
                                    <Divider />
                                    <Grid style={{paddingTop: 20, paddingBottom: 20}}>
                                        <Typography variant='h5'> Lipata</Typography>
                                        <Card>
                                            <Typography variant='h5' textAlign={'center'} style={{backgroundColor:'gray'}}>Alert 0</Typography>
                                            <Typography variant='h6'>Date: 06 February 2023</Typography>
                                            <Typography variant='h6'>Time: 11:30</Typography>
                                            <Typography variant='h6'>Triggers: </Typography>
                                        </Card>
                                    </Grid>
                                    <Divider />
                                    <Grid style={{paddingTop: 20, paddingBottom: 20}}>
                                        <Typography variant='h5'> Umingan</Typography>
                                        <Card>
                                            <Typography variant='h5' textAlign={'center'} style={{backgroundColor:'orange'}}>Alert 2</Typography>
                                            <Typography variant='h6'>Date: 06 February 2023</Typography>
                                            <Typography variant='h6'>Time: 11:30</Typography>
                                            <Typography variant='h6'>Triggers: Rainfall, Subsurface Sensors</Typography>
                                        </Card>
                                    </Grid>
                                    <Divider />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: '85vh', width: '100%'}}>
                            <CardContent>
                                <Typography variant="h4" component="div">
                                    ????
                                </Typography>
                                <Divider />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Controls;
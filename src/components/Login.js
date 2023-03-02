import React, { Fragment, useState } from 'react';
import { Grid, TextField, Typography, Button, Link, Card } from '@mui/material';
import DOST_seal from '../assets/dost_seal.png';
import Dynaslope_seal from '../assets/dynaslope_seal.png';
import Province_seal from '../assets/iloilo_province_seal.png';
import banner from '../assets/banner.png'
import logo_gif from '../assets/Iloilo.gif'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        window.location.href = '/main';
    }

    return (
        <Fragment> 
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{margin: 10}}>
                    <div
                     style={{
                        textAlign: 'center',
                        height: 'auto',
                        width: '100%',
                     }}>
                        <img
                          src={logo_gif}
                          alt='mabangis-na-banner-png'
                          style={{
                            objectFit: 'contain',
                            height: 250,
                            width: 600,
                          }}
                        />
                    </div>
                </Grid>
                <Grid container spacing={2} textAlign="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField id="filled-helperText"
                            placeholder="E.g. JuanDelacruz"
                            inputProps={{min: 0, style: {textAlign: 'center'}}}
                            helperText={
                            <Typography
                                variant="caption"
                                display="block"
                                style={{textAlign: 'center'}}>
                                Username
                            </Typography>
                            }
                            variant="outlined"
                            style={{width: '20%'}}
                            onChange={e => {
                                setUsername(e.target.value)
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField id="filled-helperText"
                            placeholder="*******"
                            inputProps={{min: 0, style: {textAlign: 'center'}}}
                            type="password"
                            helperText={
                            <Typography
                                variant="caption"
                                display="block"
                                style={{textAlign: 'center'}}>
                                Password
                            </Typography>
                            }
                            variant="outlined"
                            style={{width: '20%'}}
                            onChange={e => {
                                setPassword(e.target.value)
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button
                            variant="contained"
                            onClick={() => {
                            handleLogin()
                            }}>
                            Sign in
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Link
                        component="button" 
                        style={{fontStyle: 'italic', fontSize: 16}}
                        onClick={e => console.log("Usto maggawa ng account ni accla oh")}
                        >
                        No account yet? Register here!
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2">
                            This website is for ILOILO Provincial Government use only.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} md={12} lg={12} textAlign='center' sx={{position: 'absolute', bottom: 60}}>
                    <div
                     style={{
                        textAlign: 'center',
                        height: 'auto',
                        width: '100%',
                     }}>
                        <img
                          src={DOST_seal}
                          alt='dost-seal-png'
                          style={{
                            objectFit:'contain',
                            height: 60,
                            width: 60,
                            marginRight: 25,
                          }}/>
                        <img
                          src={Dynaslope_seal}
                          alt='dynaslope-seal-png'
                          style={{
                            objectFit:'contain',
                            height: 60,
                            width: 60,
                            marginRight: 25,
                          }}/>
                        <img
                        src={Province_seal}
                        alt='ilo-province-seal-png'
                        style={{
                            objectFit:'contain',
                            height: 60,
                            width: 60,
                            marginRight: 25,
                        }}/> 
                    </div>
                </Grid>
                <Grid container textAlign="center" sx={{position: 'absolute', bottom: 20}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2">
                        This site uses cookies to analyze non-identifiable web traffic data. DOST-PHIVOLCS is committed to protect and respect your personal data privacy in compliance with the Data Privacy Act of 2012.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Login;
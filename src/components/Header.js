import React, {Fragment, useState, useEffect} from 'react';
import {
  Grid,
  IconButton,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Toolbar,
  Tooltip,
  Avatar,
} from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

const Header = () => {
    return(
        <Fragment>
            <Grid container style={{background: '#16526D'}}>
                <Grid item xs={4} sm={4} md={6} lg={6}>
                    <div
                        style={{
                        textAlign: 'left',
                        height: 'auto',
                        width: '100%',
                        padding: 20,
                        }}>
                        <Typography
                        variant="h5"
                        style={{fontWeight: '600', color: 'white'}}>
                        COMMUNITY-BASED EARLY WARNING SYSTEM FOR LANDSLIDES
                        </Typography>
                        <Typography
                        variant="h6"
                        style={{fontWeight: '300', color: 'white'}}>
                        Iloilo PDRRMO
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
} 

export default Header;
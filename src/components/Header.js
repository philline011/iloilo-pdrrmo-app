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
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import moment from 'moment';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <Fragment>
            <Grid container style={{background: '#16526D'}}>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <div
                        style={{
                        textAlign: 'left',
                        height: 'auto',
                        width: '80%',
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
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <div style={{textAlign: 'end', marginRight: 20}}>
                        <IconButton
                            id="button"
                            aria-controls={open ? 'menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{p: 2, mt: 4}}>
                            <MenuIcon alt="Menu" sx={{color: 'white'}} />
                            </IconButton>
                            <Menu
                            id="menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'button',
                            }}>
                            {/* <MenuItem onClick={handleClose}>Resources</MenuItem>
                            <MenuItem onClick={handleClose}>Feedback</MenuItem> */}
                            <MenuItem onClick={() => (window.location = '/')}>
                                Logout
                            </MenuItem>
                            </Menu>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
} 

export default Header;
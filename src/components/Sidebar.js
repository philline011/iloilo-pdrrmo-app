import React, { Fragment, useState, useEffect } from "react";
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
  Box,
  Drawer,
  ToolBar,
  Divider,
  styled,
  useTheme,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Fab } from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import Header from "./Header";
import Maps from "./Map";
import mar_drone from '../assets/mar_drone.jpg';
import umi_drone from '../assets/umi_drone.png';


const Sidebar = (props) => {
  const {setZoomedLocation, zoom, setZoom} = props
  const drawerWidth = 340;
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  // const [zoomButton, setZoomButton] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(()=> {
  //   if (zoom === 9) {
  //     setZoomButton(true)
  //   } else {
  //     setZoomButton(false)  
  //   }
  // },[zoom, zoomButton, setZoom])

  return (
    <Fragment>
      <Toolbar style={{ backgroundColor: "#16526D" }}>
        <Header />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          // onClick={handleDrawerOpen}
          // sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
      <Divider />
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 35,
          right: open ? 350 : 20,
        }}
      >
        {open === true ? (
            <Tooltip title="Hide site list">
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon style={{fontSize: "90px"}}/>
              </IconButton>
            </Tooltip>
            ) : (
            <Tooltip title="Show site list">
              <IconButton  onClick={handleDrawerOpen}>
                <ChevronLeftIcon style={{fontSize: "90px"}}/>
              </IconButton>
            </Tooltip>
            )}
      </div>
      <Drawer
        PaperProps={{
          sx: {
            width: drawerWidth,
            borderWidth: 0,
            backgroundColor: "transparent",
            marginTop: 13
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
          <Card sx={{minWidth: 275, margin: 3, border: '2px solid black'}}>
            <CardActionArea onClick={e => {
              setZoomedLocation({lat: 10.827102506839408, lng: 122.32185110449794})
              setZoom(20)
            }}>
              <CardMedia
                sx={{ height: 100 }}
                image={mar_drone}
                title="mar drone shot"
              />
              <CardContent>
                <Typography variant="h5"><b>MAR</b></Typography>
                <Typography variant="subtitle1">Brgy. Marirong, Leon, Iloilo</Typography>
                <Typography variant="subtitle2">Alert status: 0 (Currently on routine monitoring)</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{minWidth: 275, margin: 3, border: '2px solid black'}}>
            <CardActionArea onClick={e => {
              setZoomedLocation({lat: 10.908841593121293, lng: 122.3277372121811})
              setZoom(18)}}>
            <CardMedia
              sx={{ height: 100 }}
              image={umi_drone}
              title="umi drone shot"
            />
              <CardContent>
                <Typography variant="h5"><b>UMI</b></Typography>
                <Typography variant="subtitle1">Brgy. Umingan, Alimodian, Iloilo</Typography>
                <Typography variant="subtitle2">Alert status: 1 (Rainfall trigger)</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Button variant="contained"
            // disabled={zoomButton}
            onClick={e => {
              setZoomedLocation({lat: 11.15405761270903, lng: 122.48382568359376})
              setZoom(9)}}
            sx={{margin: 9}}>
            Reset zoom
          </Button>
      </Drawer>
      
    </Fragment>
  );
};

export default Sidebar;

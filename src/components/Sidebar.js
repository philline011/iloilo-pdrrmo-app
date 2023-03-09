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
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, Fab } from "@mui/material";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Header from "./Header";
import Maps from "./Map";
import mar_drone from '../assets/mar_drone.jpg';
import umi_drone from '../assets/umi_drone.png';
import TimelinePage from "./TimelinePage";
import hazard_map_mar from '../assets/hazard_map_mar.jpg';
import hazard_map_umi from '../assets/hazard_map_umi.jpg';
import hazard_map_blc from '../assets/hazard_map_blc.jpg';
import hazard_map_pep from '../assets/hazard_map_pep.jpg';
import hazard_map_ina from '../assets/hazard_map_ina.jpg';

const Sidebar = (props) => {
  const {zoomedLocation, setZoomedLocation, zoom, setZoom, sites} = props
  const drawerWidth = 360;
  const cardWidth = 500;
  const historyWidth = 600;
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [openCard, setOpenCard] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [selectedSiteHistory, setSelectedSiteHistory] = useState()
  const [selectedSite, setSelectedSite] = useState(1);

  const handleSelectedSite = (event, index) => {
      setSelectedSite(index);
      handleCardOpen()
  }

  const dummyData = [
    {
      id: 1,
      site: 'MAR',
      site_address: 'Brgy. Marirong, Leon, Iloilo',
      alert_status: 0,
      alert_info: '(Currently on routine monitoring)',
      timestamp: '2023-02-16',
      one_day: 0,
      three_day: 15,
      element_at_risk: '46 households (237 residents)',
      img: mar_drone,
      location: {lat: 10.827102506839408, lng: 122.32185110449794},
      hazard_map: hazard_map_mar
    },
    {
      id: 2,
      site: 'UMI',
      site_address: 'Brgy. Umingan, Alimodian, Iloilo',
      alert_status: 1,
      alert_info: '(Rainfall trigger)',
      timestamp: '2023-02-14',
      one_day: 67.6,
      three_day: 130,
      element_at_risk: '46 households (227 residents)',
      img: umi_drone,
      location: {lat: 10.908841593121293, lng: 122.3277372121811},
      hazard_map: hazard_map_umi
    },
    {
      id: 3,
      site: 'BLC',
      site_address: 'Brgy. Boloc, Tubungan, Iloilo',
      alert_status: 0,
      alert_info: '(Currently on routine monitoring)',
      timestamp: '2023-02-14',
      one_day: 0,
      three_day: 130,
      element_at_risk: '46 households (227 residents)',
      img: umi_drone,
      location: {lat: 10.826168878562344, lng: 122.309707403183},
      hazard_map: hazard_map_blc
    },
    {
      id: 4,
      site: 'PEP',
      site_address: 'Brgy. Pepe, Leon, Iloilo',
      alert_status: 0,
      alert_info: '(Currently on routine monitoring)',
      timestamp: '2023-02-14',
      one_day: 0,
      three_day: 130,
      element_at_risk: '46 households (227 residents)',
      img: umi_drone,
      location: {lat: 10.789196712779255, lng: 122.33391165733337},
      hazard_map: hazard_map_pep
    },
    {
      id: 5,
      site: 'INA',
      site_address: 'Sitio Sambag, Brgy. Inabasan, Maasin, Iloilo',
      alert_status: 2,
      alert_info: '(Surficial trigger)',
      timestamp: '2023-02-14',
      one_day: 0,
      three_day: 130,
      element_at_risk: '46 households (227 residents)',
      img: umi_drone,
      location: {lat: 10.869111952702008, lng: 122.43642466556223},
      hazard_map: hazard_map_ina
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCardOpen = () => {
    setTimeout(() => {
      setOpenCard(true);
    }, 2000);
  }

  const handleCardClose = () => {
    setOpenCard(false);
  }

  const handleOpenHistory = () => {
    setOpenHistory(true);
  }
 
  useEffect(() => {
    if (zoom === 9) {
      handleCardClose()
    }
  }, [zoom])

  return (
    <Fragment>
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
            marginTop: 20,
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <List 
          sx={{overflowY: 'scroll', marginBottom: 25}}
        >
        {dummyData.map((item, index) => (
          <div sx={{marginLeft: 10}} key={item.id}>
            <ListItem>
                <ListItemButton
                  onClick={(event) =>{
                    setZoom(18)
                    handleSelectedSite(event, index)
                    setZoomedLocation(item.location)
                    handleCardClose()
                    setSelectedSiteHistory(item.site)
                }}>
                <Card sx={{minWidth: 275, margin: 3, border: '2px solid black'}}>
                    <CardMedia
                      sx={{ height: 100 }}
                      image={item.img}
                      title="drone shot"
                    />
                    <CardContent>
                      <Typography variant="h5"><b>{item.site}</b></Typography>
                      <Typography variant="subtitle1">{item.site_address}</Typography>
                      <Typography variant="subtitle2">Alert status: {item.alert_status} {item.alert_info}</Typography>
                    </CardContent>
                </Card>
                </ListItemButton>
              </ListItem>
          </div>   
        ))}
        </List>
      </Drawer>
      <Drawer
          PaperProps={{
              sx: {
              width: cardWidth,
              borderWidth: 0,
              backgroundColor: "transparent",
              marginTop: 20
              }
          }}
            variant="persistent"
            anchor="left"
            open={openCard}
      >
        <Card sx={{minWidth: 400, margin: 5, border: '2px solid black'}}>
          <CardMedia
                  sx={{ height: 150 }}
                  image={dummyData[selectedSite].img}
                  title="mar drone shot"
                  />
            <CardContent>
              <Typography variant="h5"><b>{dummyData[selectedSite].site}</b></Typography>
              <Typography variant="subtitle1">{dummyData[selectedSite].site_address}</Typography>
              <Divider sx={{marginBottom: 1}}/>
              <Typography variant="subtitle2">Alert status: {dummyData[selectedSite].alert_status} {dummyData[selectedSite].alert_info}</Typography>
              <Typography variant="subtitle2">Timestamp: {dummyData[selectedSite].timestamp}</Typography>
              <Typography variant="subtitle2">Cumulative Rainfall: 1-day: {dummyData[selectedSite].one_day}cm / 3-day: {dummyData[selectedSite].three_day}cm </Typography>
              <Divider sx={{marginBottom: 1}}/>
              <Typography variant="subtitle2">Elements at Risk: {dummyData[selectedSite].element_at_risk}</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'flex-end'}}>
              <Tooltip title="Download site hazard map">
                <a href={dummyData[selectedSite].hazard_map} download style={{textDecoration: 'none'}}>
                  <IconButton>
                    <CloudDownloadIcon fontSize="large"/>
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="Check site event history">
                <IconButton 
                  onClick={() => {
                    handleOpenHistory()
                    setOpen(false)
                    }}>
                  <ContentPasteSearchIcon fontSize="large"/>
                </IconButton>
              </Tooltip>
            </CardActions>
        </Card>
      </Drawer>
      <Drawer
        PaperProps={{
          sx: {
            width: historyWidth,
            borderWidth: 0,
            backgroundColor: "transparent",
            marginTop: 17,
            marginRight: 2
          }
        }}
        variant="persistent"
        anchor="right"
        open={openHistory}
      >
        <Card sx={{minWidth: 400, maxHeight: 800, border: '2px solid black', overflowY: 'scroll'}}>
          <TimelinePage setOpenHistory={setOpenHistory} selectedSiteHistory={selectedSiteHistory} setOpen={setOpen}/>
        </Card>
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;

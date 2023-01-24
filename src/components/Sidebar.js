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
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Button, Fab } from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

import Header from "./Header";
import Maps from "./Map";

const Sidebar = () => {
  const drawerWidth = 240;
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [mapType, setMapType] = useState("street");

  const handleDrawerOpen = () => {
    // setOpen(true);
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2.5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  return (
    <Box>
      {/* <CssBaseline /> */}
      {/* <AppBar position="fixed" open={open}> */}
      <Toolbar style={{ backgroundColor: "#16526D" }}>
        <Header />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
      {/* <Main open={open}> */}
      {/* <DrawerHeader /> */}
      <Divider />
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 35,
          right: open ? 250 : 35,
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleDrawerOpen}>
          <WidgetsRoundedIcon />
        </Fab>
      </div>
      <Maps mapType={mapType} />
      {/* </Main> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <FormGroup>
          <Typography>Sites</Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Umingan"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Marirong"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lipata"
          />
          <Divider />
          <Typography>Filters</Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rain Gauges"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Subsurface Sensors"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Surficial Markers"
          />
        </FormGroup>
        <Divider />
        <Typography>Map Type</Typography>
        <Button
          variant="contained"
          onClick={() => {
            if (mapType == "street") setMapType("terrain");
            else if (mapType == "terrain") setMapType("street");
          }}
        >
          {mapType == "street" ? "Terrain View" : "Street View"}
        </Button>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

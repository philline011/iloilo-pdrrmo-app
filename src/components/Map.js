import React, { Fragment, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Leaflet, { Map } from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  MapConsumer,
  GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import hash from "object-hash";
import { Button, Fab } from "@mui/material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

const Maps = (props) => {
  const { mapType } = props;
  // const [mapType, setMapType] = useState('street')
  const screen_width = window.screen.width;
  const screen_height = window.screen.height;

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        console.log(e);
        const { lat, lng } = e.latlng;
        // L.marker([lat, lng], { icon }).addTo(map);
        L.popup().setLatLng([lat, lng]).setContent("andito ako").openOn(map);
      },
    });
    if (mapType == "street") {
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else if (mapType == "terrain") {
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        }
      ).addTo(map);
    }

    return null;
  }

  return (
    <div>
      <div
        style={{
          zIndex: 0,
          position: "fixed",
          height: screen_height,
          width: screen_width,
          paddingTop: ".2%",
        }}
      >
        <MapContainer
          center={[11.15405761270903, 122.48382568359376]}
          zoom={9}
          style={{ height: "95vh", width: "100%" }}
        >
          <MyComponent />
        </MapContainer>
      </div>

      {/* <div style={{zIndex:1, position: 'absolute', bottom: 35, right: 35}}>
            <Button variant="contained"
                onClick={()=>{
                if(mapType=="street") setMapType("terrain")
                else if(mapType=="terrain") setMapType("street")
                }}
            >{mapType == "street" ? "Terrain View" : "Street View"}</Button>
            <Fab color="primary" aria-label="add">
                <WidgetsRoundedIcon />
            </Fab>
          </div> */}
    </div>
  );
};

export default Maps;

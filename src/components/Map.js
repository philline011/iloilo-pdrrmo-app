import React, { Fragment, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  useMapEvents,
  GeoJSON,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import boloc_dummy from '../geojson/boloc_dummy.json';
import marirong_dummy from '../geojson/marirong_dummy.json';
import umingan_dummy from '../geojson/umingan_dummy.json';
import pepe_dummy from '../geojson/pepe_dummy.json';
import inabasan_dummy from '../geojson/inabasan_dummy.json';


const { Overlay } = LayersControl;

const Maps = (props) => {
  const { mapType, sites, filters, zoomedLocation, zoom, setZoomLevel } = props;
  // const [mapType, setMapType] = useState('street')
  const screen_width = window.screen.width;
  const screen_height = window.screen.height;

  useEffect(()=> {
    console.log(props)
  },[props])

  const loadSites = (map) => {
    if(sites.BLC === true){
      console.log("boloc")
      L.geoJSON(boloc_dummy, {
        pointToLayer: function(feature, latlng){
          switch(feature.properties.function_code){
            case 'RG': return L.marker(latlng, {icon: rain_gauge});
            case 'SS': return L.marker(latlng, {icon: subsurface_sensor});
          }
        }
      }).addTo(map)
    }
    if(sites.MAR === true){
      console.log("marirong")
      L.geoJSON(marirong_dummy, {
        pointToLayer: function(feature, latlng){
          switch(feature.properties.function_code){
            case 'RG': return L.marker(latlng, {icon: rain_gauge});
            case 'SS': return L.marker(latlng, {icon: subsurface_sensor});
            default : return;
          }
        }
      }).addTo(map)
    }
    if(sites.UMI === true){
      console.log("umingan")
      L.geoJSON(umingan_dummy, {
        pointToLayer: function(feature, latlng){
          switch(feature.properties.function_code){
            case 'RG': return L.marker(latlng, {icon: rain_gauge});
            case 'SS': return L.marker(latlng, {icon: subsurface_sensor});
            default : return;
          }
        }
      }).addTo(map)
    }
    if(sites.PEP === true){
      console.log("pepe")
      L.geoJSON(pepe_dummy, {
        pointToLayer: function(feature, latlng){
          switch(feature.properties.function_code){
            case 'RG': return L.marker(latlng, {icon: rain_gauge});
            case 'SS': return L.marker(latlng, {icon: subsurface_sensor});
            default : return;
          }
        }
      }).addTo(map)
    }
    if(sites.INA === true){
      console.log("inabasan")
      L.geoJSON(inabasan_dummy, {
        pointToLayer: function(feature, latlng){
          switch(feature.properties.function_code){
            case 'RG': return L.marker(latlng, {icon: rain_gauge});
            case 'SS': return L.marker(latlng, {icon: subsurface_sensor});
            default : return;
          }
        }
      }).addTo(map)
    }
  }

  function MyComponent() {

    const map = useMapEvents({
      click: (e) => {
        console.log(e);
        const { lat, lng } = e.latlng;
        // L.marker([lat, lng], { icon }).addTo(map);
        L.popup().setLatLng([lat, lng]).setContent("andito ako").openOn(map);
      },
    });
    if (mapType === "street") {
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    } else if (mapType === "terrain") {
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        }
      ).addTo(map);
    }
    map.flyTo(zoomedLocation, zoom)
    
    // loadSites(map)

    return null;
  }

  const renderMarker = (feature) => {
    switch(feature.properties.function_code){
      case 'RG': return L.marker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]], {icon: rain_gauge});
      case 'SS': return L.marker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]], {icon: subsurface_sensor});
      default : return;
    }
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
          {sites.BLC === true &&
          <GeoJSON key='boloc-layer' data={boloc_dummy} 
            pointToLayer={(feature) => {
              return renderMarker(feature)
            }}/>
          }

          {sites.MAR === true &&
          <GeoJSON key='marirong-layer' data={marirong_dummy} 
            pointToLayer={(feature) => {
              return renderMarker(feature)
            }} 
          />
          }

          {(sites.UMI === true) &&
          <GeoJSON key='umingan-layer' data={umingan_dummy} 
            pointToLayer={(feature) => {
              return renderMarker(feature)
            }} />
          }

          {sites.PEP === true &&
          <GeoJSON key='pepe-layer' data={pepe_dummy} 
            pointToLayer={(feature) => {
              return renderMarker(feature)
            }}/>
          }

          {sites.INA === true &&
          <GeoJSON key='inabasan-layer' data={inabasan_dummy} 
            pointToLayer={(feature) => {
              return renderMarker(feature)
            }}/>
          }

          <MyComponent />
        </MapContainer>
      </div>

    </div>
  );
};

const rain_gauge = L.icon({
  iconUrl: require('../markers/raingauge.png'),
  iconSize: [30,30]

  
})

const earthquake = L.icon({
  iconUrl: require('../markers/raingauge.png'),
  iconSize: [30,30]

  
})

const subsurface_sensor = L.icon({
  iconUrl: require('../assets/datalogger_w_rg.png'),
  iconSize: [40,40]
})

export default Maps;

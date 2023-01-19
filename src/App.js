import React, {useState, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import Leaflet, { Map } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup, MapConsumer, GeoJSON} from 'react-leaflet'
import L from "leaflet";
import hash from 'object-hash'
import { Button } from '@mui/material';
import ncr from './ncr.geojson'
import sample from './geojson_sample.json'



// function MyComponent(){
//   const map = useMapEvents({
//     click: () => {
//       map.locate()
//     },
//     locationfound: (location) => {
//       console.log("hkwgwrv", location)
//     }
//   })
// }

function App() {

  const [mapType, setMapType] = useState('street')
  const ncrr = {"type":"FeatureCollection", "features": [
    {
        "type":"Feature",
        "geometry":
            {
                "type":"Polygon",
                "coordinates":
                    [
                        [
                            [121.05966011600003,14.59007071800005],
                            [121.05987154900004,14.581568914000059],
                            [121.05139764300009,14.567941174000055],
                            [121.03322025200009,14.568020304000072],
                            [121.01704669300011,14.580975754000065],
                            [121.02603883000006,14.59479852000004],
                            [121.03468092000003,14.590720646000022],
                            [121.0517763150001,14.601365661000045],
                            [121.05924493500004,14.601644073000045],
                            [121.05966011600003,14.59007071800005]
                        ]
                    ]
            },
                        
        "properties":
            {
                "Shape_Leng":0.141519563419,
                "Shape_Area":0.000948954134076,
                "ADM3_EN":"City of Mandaluyong",
                "ADM3_PCODE":"PH137401000",
                "ADM3_REF":null,
                "ADM3ALT1EN":null,
                "ADM3ALT2EN":null,
                "ADM2_EN":"NCR, Second District",
                "ADM2_PCODE":"PH137400000",
                "ADM1_EN":"National Capital Region",
                "ADM1_PCODE":"PH130000000",
                "ADM0_EN":"Philippines (the)",
                "ADM0_PCODE":"PH",
                "date":"2016/06/15",
                "validOn":"2018/01/30"
            }
    },
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[121.10187866500007,14.620657343000062],[121.08365058700008,14.624011572000029],[121.07903023100005,14.617969850000065],[121.07440579500008,14.628550651000069],[121.08370051300005,14.64383407300005],[121.08976019500005,14.66251567200004],[121.10670234300005,14.675499389000038],[121.1261471470001,14.669974177000029],[121.13486852200003,14.658852383000067],[121.12855805700008,14.643593338000073],[121.10549838300005,14.632654354000067],[121.10187866500007,14.620657343000062]]]},"properties":{"Shape_Leng":0.25701684045,"Shape_Area":0.00192389849153,"ADM3_EN":"City of Marikina","ADM3_PCODE":"PH137402000","ADM3_REF":null,"ADM3ALT1EN":null,"ADM3ALT2EN":null,"ADM2_EN":"NCR, Second District","ADM2_PCODE":"PH137400000","ADM1_EN":"National Capital Region","ADM1_PCODE":"PH130000000","ADM0_EN":"Philippines (the)","ADM0_PCODE":"PH","date":"2016/06/15","validOn":"2018/01/30"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[121.10187866500007,14.620657343000062],[121.11044978200005,14.592235448000054],[121.10905753300005,14.580946777000065],[121.0968965510001,14.569254547000071],[121.09812230000011,14.554700033000074],[121.09436799700006,14.546736230000022],[121.08109244600007,14.547432314000048],[121.06700656800001,14.559267901000055],[121.05139764300009,14.567941174000055],[121.05987154900004,14.581568914000059],[121.05966011600003,14.59007071800005],[121.08227194300002,14.595044767000047],[121.07903023100005,14.617969850000065],[121.08365058700008,14.624011572000029],[121.10187866500007,14.620657343000062]]]},"properties":{"Shape_Leng":0.344847549341,"Shape_Area":0.00262556408687,"ADM3_EN":"City of Pasig","ADM3_PCODE":"PH137403000","ADM3_REF":null,"ADM3ALT1EN":null,"ADM3ALT2EN":null,"ADM2_EN":"NCR, Second District","ADM2_PCODE":"PH137400000","ADM1_EN":"National Capital Region","ADM1_PCODE":"PH130000000","ADM0_EN":"Philippines (the)","ADM0_PCODE":"PH","date":"2016/06/15","validOn":"2018/01/30"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[121.10670234300005,14.675499389000038],[121.08976019500005,14.66251567200004],[121.08370051300005,14.64383407300005],[121.07440579500008,14.628550651000069],[121.07903023100005,14.617969850000065],[121.08227194300002,14.595044767000047],[121.05966011600003,14.59007071800005],[121.05924493500004,14.601644073000045],[121.04299056400009,14.60962373700005],[121.0377023420001,14.606355012000051],[121.02328190000003,14.613483535000057],[121.01962265700001,14.603057785000033],[120.98988594100001,14.62564046500006],[120.99127371600002,14.639904883000042],[121.00549789400009,14.671909959000061],[121.02265398600002,14.687140174000035],[121.01443080100012,14.719158309000022],[121.02878736700006,14.729425610000021],[121.04083690900006,14.742111187000035],[121.07503917800011,14.740194067000061],[121.09102126100004,14.758445970000025],[121.10968224500004,14.763837527000021],[121.12119922200009,14.77602956000004],[121.12478007000004,14.766289029000063],[121.11822157000006,14.749419337000063],[121.1180229790001,14.729928850000022],[121.12581527000009,14.721399373000054],[121.12461778900001,14.708744601000035],[121.11640583700012,14.705626875000064],[121.11216870100009,14.684747918000028],[121.10670234300005,14.675499389000038]]]},"properties":{"Shape_Leng":0.773902307136,"Shape_Area":0.0136303409711,"ADM3_EN":"Quezon City","ADM3_PCODE":"PH137404000","ADM3_REF":null,"ADM3ALT1EN":null,"ADM3ALT2EN":null,"ADM2_EN":"NCR, Second District","ADM2_PCODE":"PH137400000","ADM1_EN":"National Capital Region","ADM1_PCODE":"PH130000000","ADM0_EN":"Philippines (the)","ADM0_PCODE":"PH","date":"2016/06/15","validOn":"2018/01/30"}},
    {"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[121.05924493500004,14.601644073000045],[121.0517763150001,14.601365661000045],[121.03468092000003,14.590720646000022],[121.02603883000006,14.59479852000004],[121.01962265700001,14.603057785000033],[121.02328190000003,14.613483535000057],[121.0377023420001,14.606355012000051],[121.04299056400009,14.60962373700005],[121.05924493500004,14.601644073000045]]]},"properties":{"Shape_Leng":0.114846642251,"Shape_Area":0.000484686128588,"ADM3_EN":"City of San Juan","ADM3_PCODE":"PH137405000","ADM3_REF":null,"ADM3ALT1EN":null,"ADM3ALT2EN":null,"ADM2_EN":"NCR, Second District","ADM2_PCODE":"PH137400000","ADM1_EN":"National Capital Region","ADM1_PCODE":"PH130000000","ADM0_EN":"Philippines (the)","ADM0_PCODE":"PH","date":"2016/06/15","validOn":"2018/01/30"}}
    ]}
  
  function MyComponent() {

    console.log(ncr)

    const map = useMapEvents({
      click: (e) => {
        console.log(e)
        const { lat, lng } = e.latlng;
        // L.marker([lat, lng], { icon }).addTo(map);
        L.popup().setLatLng([lat, lng]).setContent("andito ako").openOn(map)
      }
    });

    if(mapType == "street"){
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }
    else if(mapType == "terrain"){
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }).addTo(map);
    }


    // L.geoJson(sample).addTo(map);

    // L.marker([14.651519, 481.049294], { icon }).addTo(map)
    // .bindPopup('QC Circle eto!')
    // .openPopup();

    // L.marker([14.654968, 481.065628], { icon }).addTo(map)
    // .bindPopup('UP eto!')
    // .openPopup();

    // L.marker([14.652, 481.058505], { icon }).addTo(map)
    // .bindPopup('PHIVOLCS eto!')
    // .openPopup();

    return null;
  }
  
  return (
    <div>

      <MapContainer center={[14.651519, 481.049294]} zoom={9}
        style={{ height: '80vh', width: '75%'

      }}
        
      >
        
        <MyComponent />
        <GeoJSON key={hash(ncr)} data={ncr} style={areaStyle}></GeoJSON>
      </MapContainer>
      <Button variant="contained"
        onClick={()=>{
          if(mapType=="street") setMapType("terrain")
          else if(mapType=="terrain") setMapType("street")
        }}
      >{mapType == "street" ? "Terrain View" : "Street View"}</Button>
    </div>
  );
}

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
});

const areaStyle = {
  filColor: "#A73737",
  fillOpacity: 0.5,
  color: "black"
}

export default App;

import Map, { Marker } from "react-map-gl/mapbox";
import { MAP_API_KEY } from "../utils/constants";
import { FaBiohazard } from "react-icons/fa";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";

const MapContainer = (props) => {
  const [viewPort, setViewPort] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: 5,
    with: "100%",
    height: "100%",
  });

  useEffect(() => {
    const tmpViewport = { ...viewPort };
    tmpViewport.latitude = props.latitude;
    tmpViewport.longitude = props.longitude;
    tmpViewport.zoom = 9;
    setViewPort(tmpViewport);
  }, [props]);

  return (
    <>
      <Map
        mapboxAccessToken={MAP_API_KEY}
        {...viewPort}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: 600, height: 400 }}
        onViewportChange={(viewPort) => setViewPort(viewPort)}
      >
        <Marker
          longitude={props.longitude}
          latitude={props.latitude}
          anchor="bottom"
        >
          <FaBiohazard color="yellow" size="30" />
        </Marker>
      </Map>
    </>
  );
};

export default MapContainer;

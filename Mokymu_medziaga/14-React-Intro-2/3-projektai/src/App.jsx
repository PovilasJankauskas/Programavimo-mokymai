import "./App.css";
// import { useEffect } from "react";
// import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import Home from "./pages/Home";

function App() {
  const API_KEY =
    "pk.eyJ1IjoiZGFsZXg5MjEiLCJhIjoiY205djI1MWNpMGVxZTJwczY4b3FsY3UwaiJ9.ylfeJS2w4r5WfoXu9J5acQ";

  // useEffect(() => {
  //   fetch("https://ipapi.co/json/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;

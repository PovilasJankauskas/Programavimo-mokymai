import { useEffect, useState } from "react";
import "./Home.css";
import MapContainer from "../components/Mapcontainer";
import LabelWithTitle from "../components/LabelWithTitle";

//latitude:54.6876
//longitude: 25.2806

const Home = () => {
  const [ipInfo, setIpInfo] = useState({
    ip: null,
    city: null,
    org: null,
    country_name: null,
  });

  const [coordinates, setCoordinates] = useState({
    latitude: 54.6876,
    longitude: 25.2806,
  });
  // const [lat, setLat] = useState();
  // const [long, setLong] = useState();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setIpInfo({
          ip: data.ip,
          city: data.region,
          org: data.org,
          country_name: data.country_name,
        });
        setCoordinates({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      // setLat(data.latitude);
      // setLong(data.longtitude)
      .catch(() => {
        //fake data
        setIpInfo({
          ip: "78.58.150.98",
          city: "Random city",
          org: "TEO",
          country_name: "Random Country",
        });
        setCoordinates({
          latitude: 55.50004,
          longitude: 25.609385,
        });
      });
  }, []);

  return (
    <>
      <div className="homeDiv">
        <LabelWithTitle
          className="homeTitle"
          title="IP adress finder"
          type="primary"
          align="center"
        />
        <LabelWithTitle
          title="What is my IP address"
          type="secondary"
          body={ipInfo?.ip}
          align="left"
        />
        <LabelWithTitle
          title="Location"
          type="default"
          body={` ${ipInfo?.country_name} ${ipInfo?.city}`}
          align="left"
        />
        <LabelWithTitle
          title="Internet provider"
          type="default"
          body={ipInfo?.org}
          align="right"
        />
      </div>
      <div className="manContainer">
        <MapContainer
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        />
      </div>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";

const useFetch = () => {
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
  return { ipInfo, coordinates };
};
export default useFetch;

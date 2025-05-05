import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  // setTimeout(() => {
  //   fetch(url)
  // .then((res) => res.json())
  // .then((data) => {
  //   setData(data);
  //   setLoading(false);
  // });
  // }, 3000);
  //   }, [url]);

  const makeApiCall = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, setTimeout);
  };

  return { data, loading, makeApiCall };
};
export default useFetch;

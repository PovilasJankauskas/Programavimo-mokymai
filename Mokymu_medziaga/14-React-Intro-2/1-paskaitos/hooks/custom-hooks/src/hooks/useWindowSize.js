import { useEffect } from "react";
import { useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize({
        height: width.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);

  return size;
};
export default useWindowSize;

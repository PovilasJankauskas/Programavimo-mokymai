import { useInsertionEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Komp1 = () => {
  const [zodis, setZodis] = useState("zodis");

  const [count, setCount] = useState(0);

  console.log("komp1 komponentas");

  useEffect(() => {
    console.log("useEffext: Komp1 mounted");
  });

  useEffect(() => {
    console.log("useEffect: komp1 mounted or updated");
  });

  useEffect(() => {
    console.log("useEffect: count value is changed");
  }, [count]);

  useEffect(() => {
    console.log("useEffect: count and zodis");
  }, [count, zodis]);

  const handleClick = () => {
    console.log("click");
    // setZodis("word");
    setCount(count + 1);
  };

  return (
    <div>
      <h2> Komp1</h2>
      <button onClick={handleClick}>Click me</button>
      <p> {zodis}</p>
      <p> {count}</p>
    </div>
  );
};
export default Komp1;

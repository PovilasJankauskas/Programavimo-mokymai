import { useState } from "react";

const Komp1 = () => {
  let [skaicius, setSkaicius] = useState(0);

  //  let skaicius = 0; parašius useState 5 eilutėje, šito nebereikia
  const didinti = () => {
    setSkaicius(skaicius++); /* ++ tas pats kas + 1 */
    console.log("didinam");
  };
  const mazinti = () => {
    setSkaicius(skaicius - 1);
    console.log("didinam");
  };

  return (
    <>
      <h4> Hooksai</h4>
      <h5> Counter </h5>
      <button onClick={didinti}> Didinti </button>
      <button onClick={mazinti}> Mažinti </button>
      <p>Dabar yra: {skaicius}</p>
    </>
  );
};
export default Komp1;

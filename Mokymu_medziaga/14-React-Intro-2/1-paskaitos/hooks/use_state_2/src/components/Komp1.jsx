import { useState } from "react";

const Komp1 = () => {
  const [zodis, setZodis] = useState("");

  const zodzioHandler = (e) => {
    console.log(e.target.value);
    setZodis(e.target.value);
  };

  return (
    <>
      <h2>Žodžio ilgis</h2>
      <label htmlFor="vardasInput">Žodis:</label>
      <input onInput={zodzioHandler} type="text" id="vardasInput" />
      <p>Įvestas žodis: {zodis} </p>
      <p>Simbolių kiekis: {zodis.length} </p>
    </>
  );
};
export default Komp1;

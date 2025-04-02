import { useState } from "react";

const Komp2 = () => {
  let zodziai = ["mano", "batai", "budo", "du", "vienas", "dingo", "akiniai"];
  let [istrauktas, setIstrauktas] = useState(" - ");

  const traukti = () => {
    let randomIndex = Math.floor(Math.random() * zodziai.length);
    setIstrauktas(zodziai[randomIndex]);
  };

  return (
    <>
      <h4> Hooks Komp 2</h4>
      <h5> Random žodis</h5>
      <button onClick={traukti}> Traukti </button>
      <p> Ištraukėm žodį iš masyvo: {istrauktas}</p>
    </>
  );
};
export default Komp2;

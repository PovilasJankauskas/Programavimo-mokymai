import { useRef } from "react";
import { useState } from "react";

const Komp2 = () => {
  const pirmasZodisRef = useRef();
  const antrasZodisRef = useRef();
  const [pirmas, setPirmas] = useState("");
  const [antras, setAntras] = useState("");

  const onIvestiClick = () => {
    const zodis1 = pirmasZodisRef.current.value;
    const zodis2 = antrasZodisRef.current.value;

    setPirmas(zodis1);
    setAntras(zodis2);
    console.log({ zodis1, zodis2 });
  };

  const daugiauRaidziu = () => {
    let pirmAts = pirmas.split("").filter((raide) => raide === "a").length;
    let antrAts = antras.split("").filter((raide) => raide === "a").length;

    if (pirmAts > antrAts) {
      return "pirmas zodis";
    } else if (antrAts > pirmAts) {
      return "antras zodis";
    }
    return "abu lygus";
  };

  return (
    <>
      <h2> Komp2</h2>
      <h4> Lyginti žodžius</h4>
      <div>
        <label htmlFor="pirmasZodis"> Pirmas žodis</label>
        <input type="text" id="pirmasZodis" ref={pirmasZodisRef} />
      </div>
      <div>
        <label htmlFor="antrasZodis"> Antras žodis</label>
        <input type="text" id="antrasZodis" ref={antrasZodisRef} />
      </div>
      <div>
        <button onClick={onIvestiClick}> Įvesti</button>
      </div>
      <p>{pirmas}</p>
      <p>{antras}</p>
      <p> a raidžių kiekis: {daugiauRaidziu()}</p>
    </>
  );
};

export default Komp2;

import { useState } from "react";

const Komp2 = () => {
  const [pirmas, setPirmas] = useState("");
  const [antras, setAntras] = useState("");

  const pirmasHandler = (event) => {
    // alert("Pirmas");
    console.log(event.target.value);
    setPirmas(event.target.value);
  };
  const antrasHandler = (event) => {
    // alert("Antras");
    console.log(event.target.value);
    setAntras(event.target.value);
  };

  const ilgesnis = () => {
    if (pirmas.length > antras.length) {
      return pirmas;
    } else if (pirmas.length < antras.length) {
      return antras;
    } else {
      return "Abu žodžiai yra vienodo ilgio";
    }
  };

  return (
    <>
      <h2> Ilgesnis žodis </h2>
      <div>
        <label htmlFor="pirmasInput">Pirmas:</label>
        <input type="text" onChange={pirmasHandler} id="pirmasInput" />
      </div>
      <div>
        <label htmlFor="antrasInput">Antras: </label>
        <input type="text" onChange={antrasHandler} id="antrasInput" />
      </div>
      <p>
        Įvesti žodžiai: &nbsp; <strong> {pirmas} </strong> ir
        <strong> {antras} </strong>
      </p>
      <p> Ilgesnis žodis yra {ilgesnis()} </p>
    </>
  );
};
export default Komp2;

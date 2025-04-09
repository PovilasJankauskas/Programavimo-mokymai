import { useState } from "react";
const Begikai = () => {
  const [pirmasBegikas, setPirmasBegikas] = useState("");
  const [antrasBegikas, setAntrasBegikas] = useState("");

  const pirmoBegikoHandler = (event) => {
    setPirmasBegikas(event.target.value);
  };
  const antroBegikoHandler = (event) => {
    setAntrasBegikas(event.target.value);
  };

  const greitesnis = (pirmasBegikas, antrasBegikas) => {
    return pirmasBegikas > antrasBegikas
      ? "Pirmas bėgikas greitesnis už antrąjį"
      : "Antras bėgikas greitesnis už pirmąjį";
  };

  return (
    <>
      <h2> Bėgikai </h2>
      <div className="pirmas_begikas">
        <label htmlFor="pirmasInput"> Pirmo bėgiko laikas: </label>
        <input type="number" onChange={pirmoBegikoHandler} id="pirmasInput" />
      </div>
      <div className="antras_begikas">
        <label htmlFor="antrasInput">Antro bėgiko laikas: </label>
        <input type="number" onChange={antroBegikoHandler} id="antrasInput" />
      </div>
      <p> Pirmojo Laikas: {pirmasBegikas}</p>
      <p> Antrojo Laikas: {antrasBegikas}</p>
      <p> Greitesnis: {greitesnis(pirmasBegikas, antrasBegikas)} </p>
    </>
  );
};

export default Begikai;

/* Komponentas „Begikai“
1. Susikurkite du įvesties laukelius (input), kur vartotojas galėtų įvesti dviejų skirtingų bėgikų
laiką (per kiek sekundžių įveikė 100 metrų distanciją).
2. Komponente susikurkite du kintamuosius su būsena (state), kur programa saugotų abiejų
bėgikų nubėgtą laiką.
3. Vartotojui įvedant laikus į įvesties laukelius, iškart turėtų užsisaugoti informacija į
kintamuosius.
4. Sukurkite papildomą funkciją, kuri surastų kuris bėgikas buvo greitesnis (mažesnis laikas) ir
išvestų per kiek laiko buvo greitesnis. Šią funkciją iškvieskite paragrafe. */

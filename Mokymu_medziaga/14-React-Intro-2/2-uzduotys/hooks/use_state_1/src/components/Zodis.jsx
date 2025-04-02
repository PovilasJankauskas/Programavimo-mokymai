import { useState } from "react";

const Zodis = () => {
  let [zodis, setZodis] = useState("");

  let vaisius = () => {
    setZodis("Pomidoras");
  };
  let darzove = () => {
    setZodis("Agurkas");
  };
  return (
    <>
      <h3> Žodis </h3>
      <p> Žodis yra: {zodis}</p>
      <button onClick={vaisius}> Pirmas žodis:</button>
      <button onClick={darzove}> Antras žodis:</button>
    </>
  );
};
export default Zodis;

/* Komponentas „Zodis“
1. Komponente susikurkite kintamąjį „zodis“, kuris turėtų state. Prie jo kaip pradinė reikšmė
priskirta tiesiog tuščios kabutės. Šį kintamąjį atvaizduokite paragrafe.
2. Sukurkite mygtuką, kuris ant paspaudimo iškviestų funkciją. Ši funkcija turėtų pakeisti
žodžio kintamojo reikšmę į „pomidoras“.
3. Sukurkite dar vieną mygtuką, kuris ant paspaudimo iškviestų funkciją. Ši funkcija turėtų
pakeisti žodžio kintamojo reikšmę į „agurkas“. */

import CounterMygtukai from "./CounterMygtukai";
import { useState } from "react";

const CounterTev = () => {
  const [paspaudimai, setPaspaudimai] = useState("");

  const valueHandler = (value) => {
    setPaspaudimai(paspaudimai + value);
  };
  return (
    <div>
      <h2> Tėvas</h2>
      <CounterMygtukai addValue={valueHandler} />
      <p> Paspaudimai {paspaudimai} </p>
    </div>
  );
};
export default CounterTev;

/*  1. Šiame komponente susikurkite counteriui sekti skirtą skaičiaus kintamąjį (kiek buvo atlikta
paspaudimų). Išveskite šį kintamąjį paragrafe.
2. Iškvieskite komponentą „CounterMygtukai“.
3. Padarykite, kad gautumėte iš „CounterMygtukai“ komponento skaičiaus reikšmę, kuri
reiškia per kiek turėtų būti pakeistas counterio kintamasis. Gavus reikšmę iš vaikinio
komponento, atnaujinkite šio tėvinio komponento reikšmę pagal nurodytą pokytį iš vaikinio
komponento.  */

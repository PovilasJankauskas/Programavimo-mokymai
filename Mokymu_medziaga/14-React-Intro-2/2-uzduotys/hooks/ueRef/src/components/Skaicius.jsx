import { useRef, useState } from "react";

const Skaicius = () => {
  const [skaiciai, setSkaiciai] = useState();
  const skaiciaiRef = useRef();

  const onSkaiciusClick = () => {
    setSkaiciai(skaiciaiRef.current.valueAsNumber);
    skaiciaiRef.current.value = "";
  };

  const teigiamasArNe = () => {
    return skaiciai > 0 ? "Taip" : "Ne";
  };

  const lyginisArNe = () => {
    return skaiciai % 2 === 0 ? "Taip" : "Ne";
  };

  return (
    <>
      <h2> Skaičius</h2>
      <label htmlFor="skaiciai"> Įveskite skaičių </label>
      <input ref={skaiciaiRef} type="number" id="skaiciai" />
      <button onClick={onSkaiciusClick}> Patvirtinti </button>
      {skaiciai && (
        <>
          <p>Įvestas skaičius: {skaiciai}</p>
          <p> Neigiamas ar teigiamas: {teigiamasArNe()}</p>
          <p> Ar lyginis: {lyginisArNe()}</p>
        </>
      )}
    </>
  );
};
export default Skaicius;

/* Komponentas „Skaicius“
1. Komponente susikurkite vieną įvesties laukelį (input) ir mygtuką. Vartotojas turės įvesti į
laukelį bet kokį norimą skaičių ir programa pasiims iš input reikšmę tik po mygtuko
paspaudimo.
2. Komponente susikurkite kintamąjį su būsena (state), kuriame būtų saugoma skaičiaus
reikšmė (kai ji bus paimta).
3. Paspaudus ant mygtuko, paimkite reikšmę iš laukelio ir įdėkite į turimą skaičiaus kintamąjį.
4. Išveskite šio kintamojo reikšmę paragrafe po įvesties laukeliu ir mygtuko.
5. Susikurkite funkciją, kuri patikrintų ar skaičius teigiamas ar neigiamas. Iškvieskite šią
funkcija naujame paragrafe.
6. Susikurkite funkciją, kuri patikrintų ar skaičius yra lyginis. Iškvieskite šią funkciją naujame
paragrafe.
7. Padarykite, kad po įvedimo (mygtuko paspaudimo) laukelis išsivalytų.
8. Padarykite, kad paragrafai, išvedantys skaičių ir su juo susijusius atsakymus nebūtų rodomi
kol skaičius nėra suvestas.  */

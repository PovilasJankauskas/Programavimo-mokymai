import { useState } from "react";

const GreicioMatuoklis = () => {
  let [greitis, setGreitis] = useState(0);

  const greicioHanlder = (event) => {
    console.log("Greitis", "- " + event.target.innerText);
    setGreitis(event.target.innerText);
  };

  const manoGreitis = () => {
    switch (greitis) {
      case "0 km/h":
        return "gazas dugnas - stoviu vietoj";
      case "5 km/h":
        return "lekiu šviesos greičiu";
      case "10 km/h":
        return "Senukas speed";
      case "15 km/h":
        return "into space";
    }
  };

  return (
    <>
      <h3> Greičio Matuoklis</h3>
      <button onClick={greicioHanlder}> 0 km/h </button>
      <button onClick={greicioHanlder}> 5 km/h </button>
      <button onClick={greicioHanlder}> 10 km/h </button>
      <button onClick={greicioHanlder}> 15 km/h </button>
      <p> Greitis: {greitis}</p>
      <p>{manoGreitis()}</p>
    </>
  );
};
export default GreicioMatuoklis;

/* Komponentas „GreicioMatuoklis“
1. Komponente susikurkite kintamąjį „greitis“, kuris turėtų state ir prie jo būtų priskirta pradinė
reikšmė 0. Šį kintamąjį išveskite paragrafe.
2. Susikurkite kelis mygtukus, kurie leistų pasirinkti skirtingą greitį. Pvz, vienas mygtukas – 0
km/h, kitas – 10 km/h ir t.t.
3. Sukurkite vieną ar kelias funkcijas, kurios ant šių mygtukų paspaudimų pakeistų kintamojo
greitis reikšmę į nurodytą prie mygtuko. Ir sujunkite šią funkciją/-jas prie mygtukų.
4. Susikurkite dar vieną funkciją, kuri tikrintų kintamojo greitis reikšmę ir išvestų kokį nors
atsakymą, pvz jeigu greitis yra 0 – išvestų „stovite“, jei greitis daugiau nei 0 bet mažiau nei
25 – „važiuojate lėtai“, ir t.t. Iškvieskite šią funkciją dar viename paragrafe. */

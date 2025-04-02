import { useState } from "react";

const Zuikis = () => {
  let [arPersoko, setArPersoko] = useState(false);

  //1. (3.?)
  const taipNe = () => {
    if (arPersoko === false) {
      return "NE";
    } else {
      return "TAIP";
    }
  };

  //2.
  const atsitiktinisSokis = () => {
    let randomBoolean = () => Math.random() >= 0.5;
    setArPersoko(randomBoolean);
    // let randomIndex = Math.floor(Math.random() * 10) + 1;
    // setArPersoko(randomIndex);
    // if (randomIndex % 2 === 0) {
    // return true;
    // } else {
    // return false;
    // }
  };
  // JavaScript doesn't have a built-in function to generate a random boolean value, but you can easily create one using Math.random(). All you need to do is check if the result of Math.random() is greater than or equal to 0.5.
  //As Math.random() generates a random number between 0 and 1, the probability of the result being greater than or equal to 0.5 is 50%, which makes for an even distribution of true and false values.

  return (
    <>
      <h3> Zuikis </h3>
      <button onClick={atsitiktinisSokis}> Ar peršoko</button>
      <p> Ar zuikis peršoko griovį - {taipNe()}</p>
    </>
  );
};
export default Zuikis;

/* 1. Komponente susikurkite kintamąjį arPersoko, kuris turėtų state ir prie jo būtų priskirta
pradinė reikšmė false. Šį kintamąjį išveskite paragrafe, pvz „Ar zuikis peršoko griovį - ne“
(vietoj true/false išsiveda žodis taip/ne).
2. Susikurkite funkciją, kuri automatiškai parinktų ir pakeistų arPersoko kintamojo reikšmę,
parenka atsitiktiniu būdu ir įrašo true arba false reikšmę. Susikurkite mygtuką, kuris ant
paspaudimo iškviestų šią funkciją.
3. Sukurkite dar vieną funkciją, kuri pakeistų kintamojo arPersoko reikšmę į true, kuri tarsi be
atsitiktinumo garantuotų peršokimo klausimą. Sukurkite mygtuką, kuris ant paspaudimo
iškviestų šią funkciją. */

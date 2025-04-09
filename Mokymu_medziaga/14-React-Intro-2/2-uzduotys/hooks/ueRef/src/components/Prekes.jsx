import { useRef } from "react";
import { useState } from "react";

const Prekes = () => {
  const inputPavadinimasRef = useRef();
  const inputKainaRef = useRef();
  const inputKiekisRef = useRef();
  const [prekes, setPrekes] = useState([]);
  const MAZAS_KIEKIS = 5;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const naujaPreke = {
      pavadinimas: inputPavadinimasRef.current.value,
      kaina: inputKainaRef.current.valueAsNumber,
      kiekis: inputKiekisRef.current.valueAsNumber,
    };
    setPrekes([naujaPreke, ...prekes]);
    inputPavadinimasRef.current.value = null;
    inputKainaRef.current.value = null;
    inputKiekisRef.current.value = null;
    console.log(prekes);
  };
  // 7.
  const onClickClearHandler = () => {
    setPrekes([]);
  };
  // 8. - 9.
  const isvestiMazaPrekiuKieki = () => {
    const prekiuLikuciai = prekes.filter(
      (preke) => preke.kiekis < MAZAS_KIEKIS
    );

    return prekiuLikuciai.length > 0 ? (
      <div>
        <h3> prekių likučiai</h3>
        {prekiuLikuciai.map((preke, index) => (
          <p key={index}>
            pavadinimas: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis:
            {preke.kiekis}
          </p>
        ))}
      </div>
    ) : (
      ""
    );
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2> Prekės </h2>
        <label htmlFor="pavadinimas">Pavadinimas</label>
        <input ref={inputPavadinimasRef} type="text" id="pavadinimas" />
        <label htmlFor="kaina"> Kaina: </label>
        <input ref={inputKainaRef} type="number" id="kaina" />
        <label htmlFor="kiekis"> Kiekis:</label>
        <input ref={inputKiekisRef} type="number" id="kiekis" />
        <button type="submit"> Tvirtinti </button>
      </form>
      {prekes.length > 0 && (
        <div>
          {prekes.map((preke, index) => (
            <p key={index}>
              Pavadinimas: {preke.pavadinimas} <br /> Kaina: {preke.kaina}
              <br />
              kiekis: {preke.kiekis}
            </p>
          ))}
          {isvestiMazaPrekiuKieki()}
          <button onClick={onClickClearHandler}> Išvalyti krepšelį</button>
        </div>
      )}
      {prekes.length === 0 && <h4> Kolkas krepšelis tuščias</h4>}
    </>
  );
};

export default Prekes;

/* Komponentas „Prekes“
1. Susikurkite formą su keliais įvesties laukeliais ir mygtuku. Įvesties laukeliai leistų suvesti
vienos prekės informaciją, o apie vieną prekę yra žinoma ši informacija: pavadinimas;
kaina; kiekis. Po mygtuko paspaudimo forma yra patvirtinama ir informacija suvedama.
2. Komponente susikurkite masyvą, kur būtų saugoma visų prekių informacija (masyvas su
prekių objektais).
3. Po formos patvirtinimo (mygtuko paspaudimo), susirinkite visą informaciją iš visų įvesties
laukelių, suformuluokite naujos prekės objektą ir jį įdėkite į masyvo priekį.
4. Po įvesties visus įvesties laukelius išvalykite.
5. Susikurkite div bloką, kuriame būtų atvaizduojamos visos prekės. Kiekvieną prekę
atvaizduokite jos atskirame div elemente, išvedant visą prekės informaciją. (bus div blokas
visoms prekėms ir daug atskirų div kiekvienai atskirai prekei).
6. Padarykite, kad jeigu prekių yra išvestų šias prekes, o jeigu prekių nėra išvestų paragrafą
su tekstu „kol kas nėra įvestų prekių“.
7. Sukurkite funkciją, kuri leistų išvalyti visus produktus iš masyvo. Įdėkite mygtuką, kuris
iškviestų šią funkciją. Mygtukas turi matytis tik jeigu yra įdėtų prekių į masyvą.
8. Sukurkite funkciją, kuri išfiltruotų / atrinktų tik tas prekes, kurių liko mažai (mažiau nei 5
vnt.). Šią funkciją panaudokite taip, kad išsivestų atskiruose blokeliuose visos atrinktos
prekės, tai galima padaryti įsivedant dar vieną atskirą masyvą ir funkcija sudėtų informaciją
į šį masyvą, arba ją galima iškviesti tiesiai spausdinime). 
9. Nerodykite šių prekių (mažų likučių) blokelio išvis jeigu pradiniame masyve nėra jokios
informacijos. */

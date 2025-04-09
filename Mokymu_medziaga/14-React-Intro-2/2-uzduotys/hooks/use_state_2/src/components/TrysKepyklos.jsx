import { useState } from "react";

const TrysKepyklos = () => {
  const [uzsakymai, setUzsakymai] = useState("");
  const [poviloKepykla, setPoviloKepykla] = useState("");
  const [jonoKepykla, setJonoKepykla] = useState("");
  const [ingosKepykla, setIngosKepykla] = useState("");

  const uzsakymuHandler = (event) => {
    setUzsakymai(event.target.valueAsNumber);
  };
  const poviloKepyklaHandler = (event) => {
    setPoviloKepykla(event.target.valueAsNumber);
  };
  const jonoKepyklaHandler = (event) => {
    setJonoKepykla(event.target.valueAsNumber);
  };
  const ingosKepyklaHandler = (event) => {
    setIngosKepykla(event.target.valueAsNumber);
  };

  const visoPagaminta = () => {
    return poviloKepykla + jonoKepykla + ingosKepykla;
  };

  const uzsakymuPajegumai = () => {
    let likutis = visoPagaminta() - uzsakymai;
    console.log(likutis);
    if (visoPagaminta() > 0) {
      return `ir yra perteklius ${likutis}`;
    } else if (visoPagaminta() < 0) {
      return `Reikia daugiau pajėgumų, trūksta:  ${likutis}`;
    }
  };

  return (
    <>
      <h2>Trys Kepyklos</h2>
      <label htmlFor="dienosUzsakymas"> Užsakymas </label>
      <input onChange={uzsakymuHandler} type="number" id="dienosUzsakymas" />
      <p> Šiandien užsakyta: {uzsakymai} </p>
      <hr />
      <div>
        <label htmlFor="povilo_kepykla"> Povilo kepykla </label>
        <input
          onChange={poviloKepyklaHandler}
          type="number"
          id="povilo_kepykla"
        />
        <p>Povilo kepykla gali iškepti: {poviloKepykla}</p>
      </div>
      <hr />
      <div>
        <label htmlFor="jono_kepykla"> Jono kepykla </label>
        <input onChange={jonoKepyklaHandler} type="number" id="jono_kepykla" />
        <p>Jono kepykla gali iškepti: {jonoKepykla}</p>
      </div>
      <hr />
      <div>
        <label htmlFor="ingos_kepykla"> Ingos kepykla </label>
        <input
          onChange={ingosKepyklaHandler}
          type="number"
          id="ingos_kepykla"
        />
        <p>Ingos kepykla gali iškepti: {ingosKepykla}</p>
      </div>
      <hr />
      <div>
        <p> Kepyklos viso gali pagaminti: {visoPagaminta()}</p>
        <p>Uzsakymų vykdymas: {uzsakymuPajegumai()}</p>
      </div>
    </>
  );
};
export default TrysKepyklos;

/* Komponentas „TrysKepyklos“
1. Komponente susikurkite vieną įvesties laukelį, kur vartotojas galės suvesti dienos
užsakymų kiekį.
2. Taip pat, susikurkite tris laukelius trims jo turimoms kepykloms įvesti (kiek užsakymų kuri
kepyklą tą dieną galėtų įgyvendinti).
3. Susikurkite keturis atitinkamus kintamuosius su būsenomis (state). Vienas kintamasis
saugos informaciją kiek turima užsakymų, kiti trys – kiekvienos atskiros kepyklos pajėgumą.
4. Padarykite kad įvykus pasikeitimams įvesties laukeliuose, informacija iš jų užsisaugotų
atitinkamuose kintamuosiuose.
5. Susikurkite funkciją, kuri įvertins ar kepyklos spės viską įgyvendinti. Bendroje sumoje tai ką
pagamina visos trys kepyklos turėtų būti lygu arba daugiau užsakymams. Išveskite
atitinkamą atsakymą (spėja / nespėja) ir jeigu nespėja dar išveskite kiek nespės įgyvendinti.
Iškvieskite šią funkciją paragrafe. */

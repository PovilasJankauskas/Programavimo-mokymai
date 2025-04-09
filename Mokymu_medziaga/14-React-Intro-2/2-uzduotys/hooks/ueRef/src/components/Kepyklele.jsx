import { useState } from "react";
import { useRef } from "react";

const Kepyklele = () => {
  const [darbuotojuSkaicius, setDarbuotojuSkaicius] = useState("0");
  const [kepiniuKiekis, setKepiniuKiekis] = useState("0");
  const [valanduKiekis, setValanduKiekis] = useState("");
  const [uzsakymai, setUzsakymai] = useState([]);

  const onInputDarbuotojuSkaiciusRef = useRef("");
  const onInputKepiniaiPerValRef = useRef("");
  const onInputDarboValRef = useRef("");
  const onInputUzsakymaiRef = useRef("");

  const inputHandler = () => {
    setDarbuotojuSkaicius(onInputDarbuotojuSkaiciusRef.current.value);
    setKepiniuKiekis(onInputKepiniaiPerValRef.current.value);
    setValanduKiekis(onInputDarboValRef.current.value);
  };

  const pridetiUzsakyma = (event) => {
    event.preventDefault();
    setUzsakymai([...uzsakymai, onInputUzsakymaiRef.current.valueAsNumber]);
    onInputUzsakymaiRef.current.value = "";
  };

  const uzsakymuSuma = () => {
    return uzsakymai.reduce((uzsakyta, sum) => uzsakyta + sum, 0);
  };

  const bendrasPajegumas = () => {
    return darbuotojuSkaicius * kepiniuKiekis * valanduKiekis;
  };

  const palyginimas = () => {
    if (bendrasPajegumas() > uzsakymuSuma()) {
      return "Gal dar ko nors?";
    } else {
      return "Užsakymų nebepriimame";
    }
  };

  return (
    <>
      <h2> Kepyklėlė </h2>
      <label htmlFor="darb_skaicius">Darbuotojų skaičius: </label>
      <input
        ref={onInputDarbuotojuSkaiciusRef}
        onChange={inputHandler}
        type="text"
        id="darb_skaicius"
      />
      <label htmlFor="kepiniai_per_h">
        Darbuotojas iškepa gaminių per val:
      </label>
      <input
        ref={onInputKepiniaiPerValRef}
        onChange={inputHandler}
        type="text"
        id="kepiniai_per_h"
      />
      <label htmlFor="darbo_val"> Darbo valandos per dieną: </label>
      <input
        ref={onInputDarboValRef}
        onChange={inputHandler}
        type="text"
        id="darbo_val"
      />
      <p>
        Darbuotojų skaicius {darbuotojuSkaicius} <br />
        Kepinių kiekis {kepiniuKiekis} <br />
        Darbo valandos: {valanduKiekis}
      </p>
      <input
        type="number"
        placeholder="Uzsakymu kiekis"
        ref={onInputUzsakymaiRef}
      />
      <button onClick={pridetiUzsakyma}>Įvesti </button>
      <p>Užsakymai: {uzsakymai.join(",")}</p>

      {uzsakymai && (
        <>
          <p> Užsakymų suma: {uzsakymuSuma()}</p>
          <p> Bendras pajėgumas: {bendrasPajegumas()}</p>
          <p> Ar spės iškepti: {palyginimas()}</p>
        </>
      )}
    </>
  );
};

export default Kepyklele;

/* Komponentas „Kepyklele“
1. Komponente susikurkite keletą įvesties laukelių bendrai kepyklėlės informacijai išsaugoti.
Šie laukeliai turėtų leisti įvesti šią informaciją: darbuotojų skaičius; vieno darbuotojo kepinių
kiekis per valandą; darbo valandų per dieną kiekis. Susikurkite kintamuosius, kurie saugotų
šią įvestą informaciją. Padarykite, kad į kintamuosius būtų įkeliama informacija po bet kokio
pasikeitimo įvesties laukeliuose, atskiro mygtuko patvirtinimui daryti nereikia.
2. Taip pat, komponente susikurkite įvesties laukelį su mygtuku, kur būtų galima suvesti visus
dienos užsakymus. Komponente susikurkite masyvą, kuriame saugotumėte visų užsakymų
skaičius. Padarykite, kad paspaudus ant mygtuko, būtų paimta informacija iš šio įvesties
laukelio ir ji būtų įkeliama į masyvo pabaigą. Po paspaudimo užsakymo įvesties laukelis turi
būti išvalytas.
3. Sukurkite funkciją, kuri surastų bendrą užsakymų sumą. Iškvieskite šią funkciją parodant
jos atsakymą. Taip pat, padarykite, kad jeigu nėra įvestos informacijos į masyvą, tai ši
išvestis nebūtų rodoma.
4. Sukurkite funkciją, kuri surastų bendrą kepyklos pajėgumą (įvertinkite kiek turite darbuotojų,
kiek kiekvienas gali iškepti per valandą ir kiek darbo valandų yra dienoje). Iškvieskite šią
funkciją parodant jos atsakymą. Padarykite, kad atsakymas būtų išvedamas tik tuo atveju
jei visa informacija yra įvesta.
5. Palyginkite ir išveskite ar kepykla spės įgyvendinti visus dienos užsakymus. Šį atsakymą
išveskite tik jeigu turite visą tam reikalingą informaciją. */

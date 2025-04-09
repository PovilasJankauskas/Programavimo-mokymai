import { useRef } from "react";
import { useState } from "react";

const Temperaturos = () => {
  const [temperaturos, setTemperaturos] = useState([]);

  const onIndextemperaturosRef = useRef();

  const onSubmitTemperaturosHandler = (event) => {
    event.preventDefault();

    let newTemperatura = onIndextemperaturosRef.current.valueAsNumber;
    setTemperaturos([...temperaturos, newTemperatura]);
    onIndextemperaturosRef.current.valueAsNumber = "";
  };

  const vidutineDienosTemperatura = () => {
    return (
      temperaturos.reduce((temp, nextTemp) => temp + nextTemp, 0) /
      temperaturos.length
    ).toFixed(2);
  };
  //8.
  const visoTemperaturu = () => {
    return temperaturos.length;
  };

  //9.

  const zemiausiaTem = () => {
    if (temperaturos.length > 0) {
      return Math.min(...temperaturos);
    }
    return null;
  };
  // 10.

  const didTemp = () => {
    if (temperaturos.length > 0) {
      return Math.max(...temperaturos);
    }
    return null;
  };

  //12.
  const onIsvalytiClick = () => {
    setTemperaturos([]);
  };

  return (
    <>
      <h2> Temperatūros </h2>
      <form onSubmit={onSubmitTemperaturosHandler}>
        <label htmlFor="temp_inp"> Įvesti temperatūrą</label>
        <input ref={onIndextemperaturosRef} type="number" id="temp_inp" />
        <button type="submit"> Įvesti </button>
        {temperaturos.length > 0 && (
          <div>
            <p> {temperaturos.join("-")} laipnsiai</p>
            <p>Vidutinė temperatūra {vidutineDienosTemperatura()} laipsniai</p>
            <p>Žemiausia temperatūra {zemiausiaTem()} laipsniai</p>
            <p>Didžiausia temperatūra {didTemp()} laipsniai</p>

            {/* 11. */}

            <p>
              Skirtumas tarp aukščiausios {didTemp()} temperaturos ir žemiausios
              {zemiausiaTem()} yra
              {zemiausiaTem() - didTemp()} laipsniai
            </p>
            <button onClick={onIsvalytiClick}> Išvalyti viską </button>
          </div>
        )}
        <div>
          <p>Viso temperaturų {visoTemperaturu()}</p>
        </div>
      </form>
    </>
  );
};

export default Temperaturos;

/*  Komponentas „Temperaturos“
1. Komponente susikurkite formą su įvesties laukeliu ir mygtuku. Į įvesties laukelį vartotojas
galės įvesti bet kokią norimą temperatūrą.
2. Susikurkite temperatūrų masyvą, kuris pradžioje gali turėtų reikšmių.
3. Išveskite šio masyvo informaciją atskirame blokelyje ar paragrafe.
???????????????????????????
4. Padarykite, kad masyvo nespausdintų (blokelio ar paragrafo), jeigu masyvas yra tuščias.
?????????????????????????????????????????
5. Padarykite, kad patvirtinus formą (įvedus reikšmę ir paspaudus enter arba paspaudus ant
mygtuko), būtų paimta informacija iš įvesties laukelio ir ji būtų įdėta į masyvo pabaigą.
6. Jeigu pradžioje masyve turėjote pradinių reikšmių, padarykite, kad pradžioje jis būtų tuščias
(useState([])).
7. Susikurkite funkciją, kuri paskaičiuotų vidutinę dienos temperatūrą. Iškvieskite šią funkciją
paragrafe. Padarykite, kad paragrafas nebūtų rodomas, kol nebus įvestos nei vienos
temperatūros į masyvą.
8. Susikurkite funkciją ir ją iškvieskite paragrafe arba iškart parodykite paragrafe, kiek iš viso
temperatūrų yra suvestų į masyvą. Šį paragrafą rodykite visada, tačiau jeigu nėra įvestų
temperatūrų į masyvą, tai rašykite, kad yra 0 įvestos informacijos, kitu atveju rašykite kiek
masyve yra duomenų.
9. Susikurkite funkciją, kuri surastų žemiausią užfiksuotą temperatūrą. Šią funkciją iškvieskite
paragrafe. Nerodykite paragrafo jeigu nėra įvestos informacijos.
10. Susikurkite funkciją, kuri surastų didžiausią užfiksuotą temperatūrą. Šią funkciją iškvieskite
paragrafe. Nerodykite paragrafo jeigu nėra įvestos informacijos.
11. Susikurkite funkciją, kuri surastų skirtumą tarp didžiausios ir mažiausios užfiksuotos
temperatūros (jeigu reikia susikurkite pagalbinius kintamuosius šiai informacijai saugoti, kad
būtų lengviau palyginti). Arba skaičiavimą galite atlikti tiesiai paragrafe. Jeigu
funkcionalumą darėte per funkciją, tai iškvieskite šią funkciją paragrafe. Nerodykite
paragrafo jeigu nėra įvestų duomenų.
12. Sukurkite mygtuką, kuris pasirodytų tik jeigu bus įvesta bent viena temperatūra. Šis
mygtukas turėtų išvalyti visą temperatūrų masyvą. Susikurkite funkciją, kurią iškviestumėte
ant tokio mygtuko paspaudimo, funkcija išvalo visą masyvą.  */

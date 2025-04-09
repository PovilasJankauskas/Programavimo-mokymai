import { useRef, useState } from "react";

const Kelione = () => {
  const [kilometrai, setKilometrai] = useState();
  const [kuroSanaudos, setKuroSanaudos] = useState();
  const [kuroKaina, setKuroKaina] = useState();

  const kilometraiRef = useRef();
  const kuroSanaudosRef = useRef();
  const kuroKainaRef = useRef();

  const onIvestiClick = () => {
    setKilometrai(kilometraiRef.current.valueAsNumber);
    kilometraiRef.current.value = "";

    setKuroSanaudos(kuroSanaudosRef.current.valueAsNumber);
    kuroSanaudosRef.current.value = "";

    setKuroKaina(kuroKainaRef.current.valueAsNumber);
    kuroKainaRef.current.value = "";
  };

  const visoSunaudotaKuro = () => {
    return (kilometrai / 100) * kuroSanaudos;
  };

  const kurasKainuos = () => {
    return visoSunaudotaKuro() * kuroKaina;
  };

  return (
    <>
      <h2> Kelionė</h2>
      <div>
        <label htmlFor="nuvaziuotaKm"> Kiek reiks nuvažiuoti km</label>
        <input ref={kilometraiRef} type="number" id="nuvaziuotaKm" />
        <p> Kiek km: {kilometrai}</p>
      </div>

      <div>
        <label htmlFor="kuroSanaudos"> Automobilis 100 km. valgo</label>
        <input ref={kuroSanaudosRef} type="number" id="kuroSanaudos" />
        <p> Kiek valgo: {kuroSanaudos}</p>
      </div>

      <div>
        <label htmlFor="kuroKaina"> Kuro kaina </label>
        <input ref={kuroKainaRef} type="number" id="kuroKaina" />
        <p> Kuro kaina: {kuroKaina}</p>
      </div>

      <button onClick={onIvestiClick}> Skaičiuoti </button>
      {kilometrai && kuroSanaudos && kuroKaina && (
        <>
          <p> Kuro bus sunaudota : {visoSunaudotaKuro().toFixed(2)} litrų </p>
          <p> Išlaidos už kurą bus: {kurasKainuos().toFixed(2)} eur </p>
        </>
      )}
    </>
  );
};
export default Kelione;

/*  Komponentas „Kelione“
1. Komponente susikurkite įvesties laukelį, kuriame vartotojas galėtų įvesti kiek iš viso dėl
kelionės reikės nuvažiuoti kilometrų. Taip pat, įvesties laukelį, kuriame bus galima suvesti
kiek vidutinių kuro sąnaudų turi automobilis 100-ui kilometrų (pvz 7 litrus). Ir galiausiai
įvesties laukelį, kur žmogus galėtų nurodyti kuro kainą už litrą. Taip pat turėtų būti
mygtukas, kuris patvirtintų įvestį.
2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti (kelionės km
suma; vidutinės sąnaudos; litro kaina).
3. Padarykite, kad paspaudus ant mygtuko visa informacija iš įvesties laukelių būtų paimta ir
sudėta į atitinkamus kintamuosius.
4. Išveskite šią informaciją paragrafe žemiau.
5. Susikurkite funkciją, kuri paskaičiuotų kiek kuro bus išnaudota kelionei. Iškvieskite šią
funkciją naujame paragrafe.
6. Susikurkite funkcija, kuri paskaičiuotų kiek iš viso turėtų kainuoti kuras. Iškvieskite šią
funkciją naujame paragrafe.
7. Padarykite, kad po įvedimo (mygtuko paspaudimo) visi laukeliai išsivalytų.
8. Padarykite, kad informacijos išvedimas ir skaičiavimai būtų parodomi tik tuo atveju jeigu yra
suvestos informacijos. */

import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
  const [zodziai, setZodziai] = useState([]);

  const handleIvestasZodis = (naujasZodis) => {
    // setZodziai([...zodziai, naujasZodis]);
    setZodziai((prev) => [...prev, naujasZodis]);
  };

  const ilgiausiasZodis = () => {
    let didziausiasZodis = {
      index: 0,
      ilgis: zodziai[0].length,
    };
    for (let i = 1; i < zodziai.length; i++) {
      if (didziausiasZodis.ilgis < zodziai[i].length) {
        didziausiasZodis = {
          index: i,
          ilgis: zodziai[i].length,
        };
      }
    }
    return zodziai[didziausiasZodis.index];
  };
  return (
    <div>
      <h4>Žodžiai</h4>
      {zodziai.length > 0 && (
        <>
          <ul>
            {zodziai.map((zodis, index) => (
              <li key={index}>{zodis}</li>
            ))}
          </ul>
          <p> Ilgiausas žodis : {ilgiausiasZodis()}</p>
        </>
      )}
      {zodziai.length === 0 && <p> Deja, nera įvestos informacijos</p>}
      <ZodziuIvedimas pridetiZodi={handleIvestasZodis} />
    </div>
  );
};
export default ZodziuBendras;

/*  Tėvinis komponentas „ZodziuBendras“
1. Šiame komponente susikurkite žodžiams saugoti skirtą masyvą. Padarykite, kad vėliau jį
eitų keisti (useState).
2. Jeigu masyve yra duomenų išspausdinkite šį masyvą nerikiuotame html sąraše (ul žymoje),
kiekvieną žodį išvedant atskirame sąrašo elemente. O jeigu masyve nėra duomenų, tada
išspausdinkite paragrafą su tekstu „Deja, nėra įvestos informacijos“.
3. Iškvieskite komponentą „ZodziuIvedimas“.
4. Padarykite, kad įvedus žodį komponente „ZodziuIvedimas“, šis „ZodziuBendras“
komponentas gautų įvestą informaciją ir papildytų jame turimą žodžių masyvą.
5. Susikurkite funkciją, kuri suranda ir išveda kuris žodis yra ilgiausias. Šią funkciją iškvieskite
paragrafe. Tačiau paragrafo nerodykite jeigu nėra įvestų žodžių į masyvą.  */

import Pridejimas from "./Pridejimas";
import VisosPrekes from "./VisosPrekes";
import { useState } from "react";

const Parduotuve = () => {
  // //   const TEST_PREKES = [
  // //     // { id: 1, pavadinimas: "Knyga", kiekis: 5, kaina: 10 },
  // //     // { id: 2, pavadinimas: "Tušinukas", kiekis: 105, kaina: 2 },
  // //     // { id: 44, pavadinimas: "Lapai", kiekis: 22, kaina: 3 },
  // //     // { id: 71, pavadinimas: "Trintukas", kiekis: 345, kaina: 0.4 },
  // //     // { id: 82, pavadinimas: "Žirklės", kiekis: 2, kaina: 7 },
  //   ];
  const [prekes, setPrekes] = useState([]);
  const handlePrekesPridejimas = (naujaPreke) => {
    console.log(naujaPreke);
    console.log("Parduotuvė gavo");
    setPrekes([...prekes, naujaPreke]);
  };
  return (
    <div>
      <h2> pvz 3</h2>
      <h3> Parduotuvė</h3>
      <Pridejimas pridetiPreke={handlePrekesPridejimas} />
      <VisosPrekes data={prekes} />
    </div>
  );
};
export default Parduotuve;

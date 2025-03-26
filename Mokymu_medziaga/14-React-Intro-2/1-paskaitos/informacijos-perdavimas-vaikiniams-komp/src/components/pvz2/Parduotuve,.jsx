import Preke from "./Preke";

const Parduotuve = () => {
  const prekes = [
    {
      id: 1,
      pavadinimas: "Keksiukas",
      kaina: 2.9,
      kiekis: 100,
    },
    {
      id: 2,
      pavadinimas: "Ekleras",
      kaina: 3.7,
      kiekis: 10,
    },
    {
      id: 3,
      pavadinimas: "Pudingas",
      kaina: 3.8,
      kiekis: 1000,
    },
  ];

  return (
    <div>
      <h1> Parduotuve </h1>

      {prekes.map((item) => (
        <Preke
          key={item.id}
          pavadinimas={item.pavadinimas}
          kaina={item.kaina}
          kiekis={item.kiekis}
        />
      ))}
    </div>
  );
};
export default Parduotuve;

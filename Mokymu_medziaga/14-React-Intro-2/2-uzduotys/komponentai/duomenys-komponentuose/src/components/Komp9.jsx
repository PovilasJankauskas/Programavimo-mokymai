// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  let kursai = [
    {
      id: 1,
      pavadinimas: "Konditerijos",
      trukme: " 90 dienų",
      kaina: 1400,
    },
    {
      id: 2,
      pavadinimas: "Kruasanu kepimo kursai",
      trukme: "7 dienos",
      kaina: 345,
    },
    {
      pavadinimas: "Porgramavimo",
      trukme: "8 mėn",
      kaina: 4345,
    },
  ];
  return (
    <div>
      <h1>Kursai</h1>
      {kursai.map((kursas) => (
        <div className="kursai" key={kursai.id}>
          <h3>Kursų pavadinimas: {kursas.pavadinimas}</h3>
          <p>
            Kursų trukmė: <strong>{kursas.trukme} </strong>, Kursų kaina:
            <strong> {kursas.kaina}</strong> eur.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Komp9;

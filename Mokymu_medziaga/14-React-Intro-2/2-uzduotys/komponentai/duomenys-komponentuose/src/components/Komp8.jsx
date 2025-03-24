// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  let salys = [
    {
      id: 1,
      salis: "Lietuva",
      sostine: " Vilnius",
      gyventoju_skaicius: 7450345,
    },
    {
      id: 2,
      salis: "Latvija",
      sostine: "Ryga",
      gyventoju_skaicius: 5640345,
    },
    {
      id: 3,
      salis: "Estija",
      sostine: " Talinas",
      gyventoju_skaicius: 3850345,
    },
  ];
  return (
    <div>
      <h1>ŠALYS</h1>
      {salys.map((salis) => (
        <div className="salis" key={salys.id}>
          <h3>{salis.salis}</h3>
          <p>{salis.sostine}</p>
          <p>{salis.gyventoju_skaicius}</p>
        </div>
      ))}
    </div>
  );
};

export default Komp8;

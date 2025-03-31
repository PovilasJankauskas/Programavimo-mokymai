import Naujiena from "./Naujiena";

const Kategorija = () => {
  let naujienos = [
    {
      id: 1,
      pavadinimas: "Su žinok ką padarė Povilas",
      tekstas: "Spausk nuorodą ir sužinosi ką padarė",
      perziuruKiekis: 90341455,
    },
    {
      id: 2,
      pavadinimas: "Ar Povilas išgyvens šiuos mokymus",
      tekstas: "Niekas nežino",
      perziuruKiekis: 1000,
    },

    {
      id: 3,
      pavadinimas: "Viltis miršta paskutinė",
      tekstas: "Lėtai bet užtikrintai",
      perziuruKiekis: 455,
    },
  ];

  return (
    <div>
      <h3> Naujienos </h3>
      {naujienos.map((naujiena, i) => (
        <Naujiena key={i} straipsnis={naujiena} />
      ))}
      ;
    </div>
  );
};
export default Kategorija;

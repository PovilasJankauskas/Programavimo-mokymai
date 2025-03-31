import Delione from "./Delione";

const HobiuParduotuve = () => {
  let deliones = [
    {
      id: 1,
      pavadinimas: "Automobilis",
      detaliuKiekis: 1000,
      plotis: 30,
      aukštis: 20,
    },
    {
      id: 2,
      pavadinimas: "Tigras",
      detaliuKiekis: 800,
      plotis: 40,
      aukštis: 40,
    },
    {
      id: 3,
      pavadinimas: "Kačiukas",
      detaliuKiekis: 200,
      plotis: 15,
      aukštis: 20,
    },
  ];

  return (
    <div>
      <div>
        <h2> Jūsų geriusia Hobiu parde</h2>
        <Delione delione={deliones[0]} />
        <Delione delione={deliones[1]} />
        <Delione delione={deliones[2]} />
      </div>
      <div>
        {deliones.map((delione, i) => {
          return <Delione key={i} delione={delione} />;
        })}
        ;
      </div>
    </div>
  );
};
export default HobiuParduotuve;

import Darbuotojai from "./Darbuotojai";

const Imone = () => {
  const darbuotojai = [
    { vardas: "Povilas", pavarde: "Jankauskas", bonusas: 50 },
    { vardas: "Vaida", pavarde: "Vaidaite", bonusas: 5000 },
    { vardas: "Beata", pavarde: "Beatytė", bonusas: 500 },
    { vardas: "Emilija", pavarde: "Emilytė", bonusas: 700 },
  ];
  return (
    <div>
      <h1>Įmonė UAB Laisvas Oras</h1>
      {darbuotojai.map((darbuotojas, i) => (
        <Darbuotojai
          key={i}
          vardas={darbuotojas.vardas}
          pavarde={darbuotojas.pavarde}
          bonusas={darbuotojas.bonusas}
        />
      ))}
    </div>
  );
};
export default Imone;

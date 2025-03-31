import Pazymys from "./Pazymys";

const Studentas = () => {
  const vardas = "Povilas";
  const pavarde = "Jankauskas";
  const mokykla = "CMI";
  const programa = "Programavimas";

  const pazymiai = [4, 5, 2, 6, 3, 7];

  return (
    <div>
      <h2> Studento informacija</h2>
      <p>Vardas: {vardas}</p>
      <p>Pavardė: {pavarde}</p>
      <p>Mokykla: {mokykla}</p>
      <p>Programa: {programa}</p>

      <h3> Pažymiai: </h3>
      {pazymiai.map((paz, i) => (
        <Pazymys key={i} value={paz} />
      ))}
    </div>
  );
};
export default Studentas;

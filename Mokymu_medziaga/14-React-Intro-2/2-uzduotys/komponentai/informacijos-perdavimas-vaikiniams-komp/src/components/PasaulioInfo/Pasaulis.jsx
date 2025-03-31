import Salis from "./Salis";

const Pasaulis = () => {
  let salys = [
    { pavadinimas: "Vokietija", zemynas: "Europa" },
    { pavadinimas: "Kinija", zemynas: "Azija" },
    { pavadinimas: "Sidnejus", zemynas: "Australija" },
  ];
  return (
    <div>
      <h2>Pasaulis</h2>
      <h4>
        {salys.map((sal, i) => (
          <Salis key={i} sal={sal} />
        ))}
      </h4>
    </div>
  );
};

export default Pasaulis;

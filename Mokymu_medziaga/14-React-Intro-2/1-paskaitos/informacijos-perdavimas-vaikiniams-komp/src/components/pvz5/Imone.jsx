import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojas = {
    vardas: "Povilas",
    pavarde: "Jankauskas",
    amzius: 39,
    pareigos: "direktorius",
    atlyginimas: 500,
  };

  let darbuotojas2 = {
    vardas: "Vaida",
    pavarde: "Vaidaitė",
    amzius: 43,
    pareigos: "gamybos vadovė",
    atlyginimas: 1500,
  };

  return (
    <div>
      <h4>Įmonė</h4>
      <Darbuotojas darbuotojas={darbuotojas} />
      <Darbuotojas darbuotojas={darbuotojas2} />
    </div>
  );
};

export default Imone;

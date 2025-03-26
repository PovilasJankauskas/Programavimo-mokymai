import Studentas from "./Studentas";

let studentas = {
  vardas: "Povilas",
  pavarde: "Jankauskas",
  amzius: 39,
};

const Grupe = () => {
  return (
    <div>
      <h2>Grupė</h2>

      <Studentas studentas={studentas} />
    </div>
  );
};
export default Grupe;

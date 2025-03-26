import Automobilis from "../pvz7/Automobilis";

const Darbuotojas = (props) => {
  console.log(props);

  let darb = props.darbuotojas;

  return (
    <div>
      <div>
        <h3> Darbuotojas </h3>
        <h5>
          Vardas: {darb.vardas}, Pavardė: {darb.pavarde}
        </h5>
        <p> Amžius: {darb.amzius}</p>
        <p> Pareigos: {darb.pareigos}</p>
        <p> Atlyginimas: {darb.atlyginimas}</p>
      </div>
    </div>
  );
};
export default Darbuotojas;

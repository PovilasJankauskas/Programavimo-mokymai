//pirmas būdas kaip perkelti duomenis/parametrus iš tėvinio į vaikinį jsx.

const Preke = ({ pavadinimas, kiekis, kaina }) => {
  return (
    <>
      <h3> {pavadinimas}</h3>
      <p>
        Prekyboje turime: <strong>{kiekis}</strong>
      </p>
      <p>{kaina}</p>
    </>
  );
};

//antras būdas ikelti duomins iš tėvinio jsx į vaikini. Per globalų objektą

/*const Preke = (props) => {
  return (
    <>
      <h3> {props.pavadinimas}</h3>
      <p>
        Prekyboje turime: <strong>{props.kiekis}</strong>
      </p>
      <p>{props.kaina}</p>
    </>
  );
}; */
export default Preke;

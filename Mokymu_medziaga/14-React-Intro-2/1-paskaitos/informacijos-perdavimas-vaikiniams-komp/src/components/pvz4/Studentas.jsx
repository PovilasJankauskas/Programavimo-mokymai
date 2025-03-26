import Anukas from "./anukas";

const Studentas = (props) => {
  return (
    <div>
      <h2> Studentas </h2>
      <h4>
        {/* props pateikia aprašytus duomenis iš tėvo (Grupe) vaikui (Studentas) */}
        {props.studentas.vardas} {props.studentas.pavarde}
      </h4>
      <p> yra {props.studentas.amzius} m. amziaus </p>
      <Anukas stud={props.studentas} />
    </div>
  );
};
export default Studentas;

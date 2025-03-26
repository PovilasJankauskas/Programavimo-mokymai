const Automobilis = (props) => {
  // visi const/let daro tą pati veiksmą
  //const auto = props.auto;
  //let gamintojas = props.auto.gamintojas;
  //let modelis = props.auto.modelis;

  let { gamintojas, modelis } = props.auto;

  return (
    <div>
      <h2> Automobiliai</h2>
      <p>
        Gamintojas: {gamintojas} Modelis: {modelis}
      </p>
    </div>
  );
};
export default Automobilis;

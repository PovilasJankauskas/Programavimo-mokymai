const Delione = (props) => {
  let { pavadinimas, detaliuKiekis, plotis, aukstis } = props.delione;

  const delionesSunkumas = () => {
    if (detaliuKiekis > 0 && detaliuKiekis < 500) {
      return "Lengvas";
    } else if (detaliuKiekis > 500 && detaliuKiekis < 1000) {
      return "Vidutinis";
    } else if (detaliuKiekis >= 1000) {
      return "Sunkus";
    }
  };
  return (
    <div>
      <h2></h2>
      <p>
        <strong> Pavadinimas: </strong> {pavadinimas}
      </p>
      <p>
        <strong> Detaliu kiekis: </strong> {detaliuKiekis} vnt.
      </p>
      <p>
        <strong> Plotis: </strong> {plotis} cm
      </p>
      <p>
        <strong> Aukštis : </strong> {aukstis} cm
      </p>
      <p> Sudėtingumu lygis: {delionesSunkumas()}</p>
    </div>
  );
};
export default Delione;

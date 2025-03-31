const Automobilis = ({ automobilis }) => {
  return (
    <div>
      <h2>
        {automobilis.gamintojas} {automobilis.modelis}
      </h2>
      <p>
        Metai: <strong>{automobilis.metai} </strong>
      </p>
      <p>
        Rida: <strong>{automobilis.rida} </strong>
      </p>
      <p>
        Kaina: <strong>{automobilis.kaina} </strong>{" "}
      </p>
    </div>
  );
};
export default Automobilis;

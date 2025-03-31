const Naujiena = ({ straipsnis }) => {
  const { pavadinimas, tekstas, perziuruKiekis } = straipsnis;
  return (
    <div>
      <h4>
        Pavadinimas {pavadinimas}{" "}
        {perziuruKiekis >= 1000 ? "(HOT)" : "(Not so HOT)"}
      </h4>
      <p>peržiūros: {perziuruKiekis} </p>
      <p> {tekstas}</p>
      <hr />
    </div>
  );
};
export default Naujiena;

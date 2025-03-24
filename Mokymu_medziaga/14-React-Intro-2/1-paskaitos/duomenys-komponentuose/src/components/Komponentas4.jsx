const Komponentas4 = () => {
  let Automobilis = {
    marke: "Audi",
    modelis: 100,
    metai: 1986,
    rida: 1004578,
    kaina: 34000,
  };

  return (
    <div>
      <h2>
        Marke: {Automobilis.marke} Modelis: {Automobilis.modelis}
      </h2>
      <ul>
        <li>metai: {Automobilis.metai} </li>
        <li>rida: {Automobilis.rida}</li>
        <li>kaina: {Automobilis.kaina}</li>
      </ul>
    </div>
  );
};

export default Komponentas4;

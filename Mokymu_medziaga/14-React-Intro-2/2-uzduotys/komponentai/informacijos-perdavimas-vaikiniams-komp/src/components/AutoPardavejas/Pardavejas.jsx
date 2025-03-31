import Automobilis from "./Automobilis";

const Pardavejas = () => {
  let automobilis = {
    gamintojas: "Audi",
    modelis: "A6",
    metai: 1992,
    rida: 6754223,
    kaina: 230000,
  };

  return (
    <div>
      <Automobilis automobilis={automobilis} />
    </div>
  );
};
export default Pardavejas;

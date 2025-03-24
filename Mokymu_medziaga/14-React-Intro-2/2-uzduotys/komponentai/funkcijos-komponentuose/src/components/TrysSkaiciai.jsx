import { suma } from "../utils/calculator";

const TrysSkaiciai = () => {
  const SkaiciusVienas = 39;
  const SkaiciusDu = 8;
  const SkaiciusTrys = 72;

  const VisiSkaiciai = [SkaiciusVienas, SkaiciusDu, SkaiciusTrys];

  const isvedimas = (skaiciai) => {
    return skaiciai.join(" - ");
  };

  const didziausiasSk = (VisiSkaiciai) => {
    return Math.max(...VisiSkaiciai);
  };
  /*
  const bendraSuma = () => {
    return suma(SkaiciusVienas, SkaiciusDu, SkaiciusTrys);
  }; 
   kitas variantas
   */
  const bendraSuma = (VisiSkaiciai) => {
    return VisiSkaiciai.reduce((suma, index) => suma + index, 0);
  };

  return (
    <>
      <h2> Skaičius</h2>
      <p> Skaičiai pasyve: {isvedimas(VisiSkaiciai)}</p>
      <p> Didžiausias skaičius: {didziausiasSk(VisiSkaiciai)}</p>
      <p> Visų skaičių suma: {bendraSuma(VisiSkaiciai)}</p>
    </>
  );
};

export default TrysSkaiciai;

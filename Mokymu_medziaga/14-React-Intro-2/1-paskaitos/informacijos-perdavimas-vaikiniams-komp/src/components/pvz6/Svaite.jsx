import Diena from "./Diena";

let temperaturos = [3, 6, 0, -5, 4, -2, 6];

const Savaite = () => {
  return (
    <div>
      <h2>Savaitė </h2>
      {temperaturos.map((temperatura, i) => (
        <Diena key={i} temp={temperatura} />
      ))}
    </div>
  );
};
export default Savaite;

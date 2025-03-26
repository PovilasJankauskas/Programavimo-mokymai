import Automobilis from "./Automobilis";

const Servisas = () => {
  let automobiliai = [
    { gamintojas: "Audi", modelis: "A6" },
    { gamintojas: "BMW", modelis: "X5" },
    { gamintojas: "Honda", modelis: "Civic" },
    { gamintojas: "Mazda", modelis: "6" },
    { gamintojas: "Toyota", modelis: "Corrola" },
  ];
  return (
    <div>
      <div>
        <h1>Servisas </h1>
        <Automobilis auto={automobiliai[0]} />
        <Automobilis auto={automobiliai[1]} />
        <Automobilis auto={automobiliai[2]} />
        <Automobilis auto={automobiliai[3]} />
        <Automobilis auto={automobiliai[4]} />
      </div>
      <div>
        {automobiliai.map((automobilis, index) => {
          console.log(automobilis);
          return <Automobilis key={index} auto={automobilis} />;
        })}
        ;
      </div>
    </div>
  );
};
export default Servisas;

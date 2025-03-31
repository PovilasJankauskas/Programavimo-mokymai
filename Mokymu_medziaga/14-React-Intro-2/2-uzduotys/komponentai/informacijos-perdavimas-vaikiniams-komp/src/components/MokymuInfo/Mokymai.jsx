import Modulis from "./Modulis";

const Mokymai = () => {
  const moduliai = [
    {
      id: 1,
      pavadinimas: "HTML",
      trukme: 455,
    },
    {
      id: 2,
      pavadinimas: "React",
      trukme: 100,
    },

    {
      id: 3,
      pavadinimas: "CSS",
      trukme: 55,
    },
    {
      id: 4,
      pavadinimas: "JavaScript",
      trukme: 123,
    },
  ];

  return (
    <div>
      <h3> Moduliai </h3>
      <ul>
        {moduliai.map((modulis, index) => (
          <li key={index}>
            <Modulis kursas={modulis} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Mokymai;

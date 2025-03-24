const Komponentas5 = () => {
  let automobiliai = ["Audi", "BMW", "Mazda", "Volvo", "Toyota", "Kia"];
  let title = "Mano automobiliai";

  return (
    <div>
      <h1>{title}</h1>
      {automobiliai.map((automobilis, index) => (
        <p key={index}>{automobilis}</p>
      ))}

      <div>
        {/* čia rašome jei norime daryti kaip sarašą (list items) */}
        <h1>{title}</h1>
        <ul>
          {automobiliai.map((automobilis, index) => (
            <li key={index}>{automobilis}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Komponentas5;

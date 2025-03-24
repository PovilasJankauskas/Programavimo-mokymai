const Komponentas6 = () => {
  let skaiciai1 = [10, 6, 7, 4, 8, 9];
  let skaiciai2 = [];
  let antraste = "Masyvai su Skaičiais ir if salyga: ";
  let arPrisijunges = true;

  return (
    <div>
      <h1> {antraste}</h1>

      <h3> Skaičiai 1 </h3>
      {skaiciai1.length > 0 ? (
        <ul>
          {skaiciai1.map((skaicius, index) => (
            <li key={index}>
              {skaicius} - {skaicius % 2 === 0 ? "lyginis" : "nelyginis"}
            </li>
          ))}
        </ul>
      ) : (
        <p> Skaičių masyve 1 nėra </p>
      )}

      <h3> Skaičiai 2 </h3>
      {skaiciai2.length > 0 ? (
        <ul>
          {skaiciai2.map((skaicius, index) => (
            <li key={index}>{skaicius}</li>
          ))}
        </ul>
      ) : (
        <p> Skaičių masyve 2 nėra </p>
      )}

      <h3> Ar prisijungęs? </h3>
      {arPrisijunges ? "prisijungęs" : "neprisijungęs"}
    </div>
  );
};

export default Komponentas6;

const Skaicius = () => {
  const Skaicius = 39;

  let arSkaiciusLyginis = () => {
    return Skaicius % 2 === 0 ? "Taip" : "Ne";
  };

  let arSkaiciusTeigiamas = () => {
    return Skaicius >= 0 ? "Taip" : "Ne";
  };

  /* kodas plačiai naudojamas

let arSkaiciusTeigiamas = (skaicius) => {
  if (skaicius >= 0) {
    return "Taip";
  } else if {
    return "Ne";
  } else {
   retunr "=0"
  }
};*/

  return (
    <>
      Skaičius
      <p> {Skaicius}</p>
      <p> Ar skaičius lyginis? {arSkaiciusLyginis(Skaicius)} </p>
      <p> Ar skaičius teigiamas? {arSkaiciusTeigiamas(Skaicius)} </p>
    </>
  );
};

export default Skaicius;

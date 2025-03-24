const Komp2 = () => {
  let pazymiai = [10, 2, 7, 4, 8];

  // vudyrkio apskaičiavimas
  const pazymiuVidurkis = (masyvas) => {
    let suma = 0;
    masyvas.forEach((element) => (suma += element));

    return suma / masyvas.length;
    //vidurkio apskaičiavimas
  };

  return (
    <div>
      <h2>Komp2</h2>
      <p> Masyvo informacijos atskirimas brūkšniu: {pazymiai.join("-")}</p>
      <p>
        {" "}
        Konkretus skaičius masyve {pazymiai[2]} ,šiuo atveju trečias skaičius
        masyve
      </p>
      <p> Paskutinis skaičius masyve {pazymiai[pazymiai.length - 1]} </p>
      <p> Masyvo skačių 'arba žodžių' kiekis masyve {pazymiai.length} </p>
      <p>
        Aritmetiniai veiksmiai, pvz vidurkio apskaičiavimas. Vidurkis yra:
        {pazymiuVidurkis(pazymiai)}
      </p>
    </div>
  );
};

export default Komp2;

const Komp3 = () => {
  //sukuriame objektą
  let studentas = {
    vardas: "Jonas",
    amzius: 20,
    miestas: "Vilnius",
    adresas: {
      gatve: "Vilniaus",
      numeris: 1,
    },
    bedarbis: false,
    pazymiai: [10, 6, 4, 7, 8],
  };
  // funkcija boolien true or falce
  const ArBedarbis = (bedarbis) => {
    // pirmas būdas rekomenduotinas
    if (bedarbis) {
      return "Taip";
    }
    return "Ne";

    // antras budas
    // return bedarbis ? "Taip" : "Ne";
  };

  return (
    <div>
      <h2>Studento informacija</h2>
      <p>
        Studento vardas: <strong>{studentas.vardas}</strong>, Amžius:{" "}
        {studentas.amzius}
      </p>
      <p> Ar bedarbis? {ArBedarbis(studentas.bedarbis)} </p>
      <p>
        Miestas: <strong>{studentas.miestas}</strong>, Gatve:
        <strong>
          {studentas.adresas.gatve} - {studentas.adresas.numeris}
        </strong>
      </p>
      <p> Pazymiai: {studentas.pazymiai.join(",")} </p>
      {/* norint atskirti masyvo duomenis būtina rašyti .join */}
    </div>
  );
};

export default Komp3;

import TekstoVaik from "./TekstoVaik";
let manoKintamasis = "tekstas is kintamojo";
//dinamini duomenys "kintamasis" kuriuos galima keisti ir pateikti į daug vietų

let tekstai = [
  "Labas",
  "Labas labas",
  "Labas labas labas",
  "Labas labas labas labas",
  "Labas labas labas labas labas",
];

const TekstoBendras = () => {
  return (
    <>
      Teksto Bendras
      <div>
        <TekstoVaik tekstas="labas" />{" "}
        {/*statiški duomenys, naudojami vieną kartą ir nesikeičia */}
        <TekstoVaik tekstas="Antras vaikas" />
        <TekstoVaik tekstas="Dar vienas vaikas" />
        <TekstoVaik tekstas="pagrandukas vaikas" />
        <TekstoVaik tekstas={manoKintamasis} /> {/*dinaminis kintamasis */}
        {tekstai.map((item, key) => (
          <TekstoVaik key={key} tekstas={item} />
        ))}{" "}
        {/* iš masyvo tekstai per map paimame norimus duomenis, index ir pritaikome key, tuomet perduodame informaciją vaikui. šis kodas ima duomenis iš dinaminis masyvas*/}
      </div>
    </>
  );
};
export default TekstoBendras;

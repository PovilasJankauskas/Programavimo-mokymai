const Darbuotojas = () => {
  const darbuotojas = {
    vardas: "Povilas",
    profesija: "Laisvo oro direktorius",
    atlyginimas: 1867,
    etatas: 0.5,
    stazas: 12,
  };

  const bendrasUzdarbis = () => {
    const dirbtaMenesiu = darbuotojas.stazas * 12;
    const etatoAtlyginimas = darbuotojas.atlyginimas * darbuotojas.etatas;
    return etatoAtlyginimas * dirbtaMenesiu;
  };

  const arIlgametisDarbuotojas = () => {
    return darbuotojas.stazas >= 10 ? "Ilgametis" : "Naujokas";
  };

  const atlyginimoDydis = () => {
    let saliesVidurkis = 1867;

    /* return darbuotojas.atlyginimas >= saliesVidurkis ? "Didesnis" : "Mažesnis";*/
    /* Galima kitaip:*/
    if (darbuotojas.atlyginimas > saliesVidurkis)
      return "Atlyginimas didesnis nei šalies vidurkris";
    if (darbuotojas.atlyginimas < saliesVidurkis)
      return "Atlyginimas mažesnis nei šalies vidurkis";
    return "Atlyginimas lygus šalies vidurkiui";
  };

  return (
    <>
      <h1> Darbuotojas </h1>
      <p>
        <strong>Vardas:</strong> {darbuotojas.vardas}
      </p>
      <p>
        <strong>Pavardė:</strong> {darbuotojas.pavardė}
      </p>
      <p>
        <strong>Profesija:</strong> {darbuotojas.profesija}
      </p>
      <p>
        <strong>Atlyginimas:</strong> {darbuotojas.atlyginimas}
      </p>
      <p>
        <strong>Darbo stažas:</strong> {darbuotojas.stazas}
      </p>
      <p>
        <strong>Bendras uždarbis:</strong> {bendrasUzdarbis()} eur
      </p>
      <p>
        <strong>Darbuotojo statusas:</strong> {arIlgametisDarbuotojas()}
      </p>
      <p>
        <strong>
          Atlyginimo palyginimas su šalies vidurkiu: {atlyginimoDydis()}
        </strong>
      </p>
    </>
  );
};

export default Darbuotojas;

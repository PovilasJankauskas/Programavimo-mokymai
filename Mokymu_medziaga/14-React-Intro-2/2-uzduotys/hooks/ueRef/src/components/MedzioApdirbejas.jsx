import { useRef } from "react";
import { useState } from "react";

const MedzioApdirbejas = () => {
  const [medziagos, setMedziagos] = useState("");
  const [valandos, setValandos] = useState("");
  const [valandinisAtlyginimas, setValandinisAtlyginimas] = useState("");

  const medziagosRef = useRef("");
  const valandosRef = useRef("");
  const valandinisAtlyginimasRef = useRef("");

  const onSumuotiClick = () => {
    setMedziagos(medziagosRef.current.valueAsNumber);

    setValandos(valandosRef.current.valueAsNumber);
    valandosRef.current.valueAsNumber = ""; //nuresetina (išvalo, po mygtuko paspaudimo 5. užduoties dalis) input laukelį, kad liktų tuščias išsaugant įvestą info p (paragrafe)

    setValandinisAtlyginimas(valandinisAtlyginimasRef.current.valueAsNumber);
  };

  const bendrosProjektoIslaidos = () => {
    return valandos * valandinisAtlyginimas + medziagos;
  };

  let antkainis = 1.3;

  const galutineKaina = () => {
    return bendrosProjektoIslaidos() * antkainis;
  };

  return (
    <>
      <h2> Medžio Apdirbėjas </h2>
      <label htmlFor="medziagu_kaina"> Viso už medžiagas: </label>
      <input ref={medziagosRef} type="number" id="medziagu_kaina" />
      <br />
      <label htmlFor="valandinis_uzdarbis"> Valandinis uždarbis: </label>
      <input
        ref={valandinisAtlyginimasRef}
        type="number"
        id="valandinis_uzdarbis"
      />
      <br />
      <label htmlFor="valandu_dirbta"> Darbo valandų kiekis: </label>
      <input ref={valandosRef} type="number" id="valandu_dirbta" />
      <hr />
      <button onClick={onSumuotiClick}> Skaičiuoti </button>
      {medziagos && valandos && valandinisAtlyginimas && (
        <div>
          <p>Apdirbėjas projektui atlikti užtruko {valandos} val. </p>
          <p>jo valandinis atlyginimas {valandinisAtlyginimas} eur/val. </p>
          <p> projekto medžiagų kaina {medziagos} eur </p>
          <p> Bendros išlaidos: {bendrosProjektoIslaidos()} eur </p>
          <p>Pardavimo kaina: {galutineKaina().toFixed(2)} eur</p>
        </div>
      )}
    </>
  );
};

export default MedzioApdirbejas;

/* Komponentas „MedzioApdirbejas“
1. Komponente susikurkite įvesties laukelius, kur būtų galima suvesti kiek iš viso kainavo
visos medžiagos, kiek iš viso valandų žmogus dirbo prie projekto, koks turėtų būti
valandinis uždarbis. Sukurkite mygtuką, kuris patvirtintų įvestį.
2. Komponente susikurkite visus reikiamus kintamuosius informacijai saugoti.
3. Padarykite, kad po mygtuko paspaudimo visa ši informacija būtų išsaugota į atitinkamus
kintamuosius.
4. Išveskite visų šių įvestų kintamųjų informaciją atskirame paragrafe.
5. Padarykite, kad po įvesties (po mygtuko paspaudimo) visi turimi įvesties laukeliai išsivalytų.
???????????
6. Padarykite, kad jeigu dar nėra įvestos informacijos, paragrafas išvedantis tą įvestą
informaciją nebūtų rodomas.
?????????????????
7. Susikurkite funkciją, kuri paskaičiuotų bendras projekto išlaidas (darbuotojo valandos
padaugintos iš norimo valandinio uždarbio ir atimta medžiagų kaina). Iškvieskite šią funkciją
atskirame paragrafe.
8. Susikurkite funkciją, kuri paskaičiuotų kiek produktas turėtų kainuoti (pridėkite 30 procentų
ant turimų išlaidų, pvz jeigu pagaminti kainuoja 100 eurų, tai turėtume parduoti už 130
eurų), kad medžio apdirbėjas galėtų ką nors iš to uždirbti. Iškvieskite šią funkciją paragrafe.

9. Padarykite, kad skaičiavimų paragrafai nebūtų rodomi tol kol vartotojas nesuvedė jokios
informacijos. */

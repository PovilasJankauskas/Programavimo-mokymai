import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
  const [kalba, setKalba] = useState("Nepeasirinkta");

  const gautaKalba = (kalba) => {
    console.log("tėvas:" + kalba);
    setKalba(kalba);
  };

  const kalbosIvertinimas = () => {
    switch (kalba) {
      case "JavaScript":
        return "panašu, kad moki react";
      case "PHP":
        return "tikėtina moki symfony";
      case "C#":
        return "manau, mėgsti MS produktus";
      default:
        return "nepasirinkai kalbos, negaliu įvertinti tavęs";
    }
  };
  return (
    <div>
      <h2> Pvz 2</h2>
      <h3>Renkamės</h3>
      <p>
        Jūs pasirinkta kalba: <strong>{kalba}</strong>
      </p>
      <ProgramavimoKalba kalbosPasirinkimas={gautaKalba} />
      <p>{kalbosIvertinimas()}</p>
    </div>
  );
};
export default Renkames;

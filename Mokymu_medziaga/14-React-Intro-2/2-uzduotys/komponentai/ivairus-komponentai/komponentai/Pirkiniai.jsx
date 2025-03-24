/* 2. Susikurkite komponentą "Pirkiniai", kurį iškviestumėte App komponente, o jo viduje turėtumėte div, kuriame būtų antraštė 
ir nerikiuotas sąrašas su tekstu. */
import "../komponentai/Pirkiniai.css";

const Pirkiniai = () => {
  return (
    <div className="pirkiniu-sarasas">
      <h3> Žmonos pirkinių sarašas Povilui</h3>
      <ul>
        <li>Duona</li>
        <li>Pienas</li>
        <li>Sūris</li>
        <li>Ledai. Svarbu!!!! </li>
        <li> Priglausk katę</li>
      </ul>
    </div>
  );
};
export default Pirkiniai;

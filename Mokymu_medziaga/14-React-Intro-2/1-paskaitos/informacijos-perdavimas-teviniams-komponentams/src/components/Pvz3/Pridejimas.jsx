import { useRef } from "react";

const Pridejimas = (props) => {
  const inputPavadinimasRef = useRef();
  const inputKiekisRef = useRef();
  const inputKainaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const naujaPreke = {
      id: Math.floor(Math.random() * 1000),
      pavadinimas: inputPavadinimasRef.current.value,
      kaina: inputKainaRef.current.valueAsNumber,
      kiekis: inputKiekisRef.current.valueAsNumber,
    };
    props.pridetiPreke(naujaPreke);

    inputPavadinimasRef.current.value = null;
    inputKiekisRef.current.value = null;
    inputKainaRef.current.value = null;
  };

  return (
    <div>
      <h2> Pridėti prekę: </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pavadinimas">Pavadinimas</label>
          <input ref={inputPavadinimasRef} type="text" id="pavadinimas" />
        </div>
        <div>
          <label htmlFor="kiekis"> Kiekis </label>
          <input ref={inputKiekisRef} type="number" id="kiekis" />
        </div>
        <div>
          <label htmlFor="kaina">Kaina</label>
          <input ref={inputKainaRef} type="number" id="kaina" step={0.01} />
        </div>
        <div>
          <button type="submit">Pridėti</button>
        </div>
      </form>
    </div>
  );
};
export default Pridejimas;

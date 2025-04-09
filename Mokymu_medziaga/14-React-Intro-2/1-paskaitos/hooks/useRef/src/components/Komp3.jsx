import { useState, useRef } from "react";

const Komp3 = () => {
  const [pazymiai, setPazymiai] = useState([1, 2, 3]);
  const pazymisInputRef = useRef();

  const pazymysInputRef = useRef();

  const onPazymiaiSubmitHandler = (event) => {
    event.preventDefault();
    alert("submittinta");

    setPazymiai([...pazymiai, pazymysInputRef.current.valueAsNumber]);
    pazymisInputRef.current.value = "";
  };

  const vidurkis = () => {
    return pazymiai.reduce((prev, curr) => curr + prev, 0) / pazymiai.length;
  };

  return (
    <>
      <h2> Komp3</h2>
      <h3>Studento vidurkis</h3>
      <form onSubmit={onPazymiaiSubmitHandler}>
        <label htmlFor="pazymys"> Įveskite pažymį: </label>
        <input ref={pazymisInputRef} type="number" min="1" max="10" />
        <button type="submit">Įvesti </button>
      </form>
      <div>
        <h3> Įvesti pažymiai </h3>
        <p> {pazymiai.join(",")} </p>
        <p>{vidurkis()}</p>
      </div>
    </>
  );
};

export default Komp3;

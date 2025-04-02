import { useState } from "react";
const Komp3 = () => {
  let [skaicius, setSkaicius] = useState(0);

  const onClickButtonAction = (value) => {
    if (value === 0) {
      setSkaicius(0);
    } else {
      setSkaicius(skaicius + value);
    }
  };

  return (
    <>
      <h4> Hooks Komp3</h4>
      <h5> Skaičių keitinėjimas</h5>
      <button onClick={() => onClickButtonAction(1)}> Didinti vienu </button>
      <button onClick={() => onClickButtonAction(-1)}> Mažinti vienu </button>
      <button onClick={() => onClickButtonAction(+5)}>Didinti penkiais</button>
      <button onClick={() => onClickButtonAction(-5)}>Mažinti penkiais</button>
      <button onClick={() => onClickButtonAction(0)}> Nustatyti nulį </button>
      <p> Dabartinė reikšmė:{skaicius} </p>
    </>
  );
};
export default Komp3;

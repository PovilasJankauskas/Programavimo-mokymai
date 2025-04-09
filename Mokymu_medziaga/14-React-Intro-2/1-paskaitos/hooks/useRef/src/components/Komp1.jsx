import { useState, useRef } from "react";

const Komp1 = () => {
  const [salis, setSalis] = useState("");
  const salisInputRef = useRef();

  const onIvestiClick = () => {
    setSalis(salisInputRef.current.value);
  };
  return (
    <>
      <h2> Komp1</h2>
      <h4> Mėgstamiausia šalis </h4>
      <div>
        <label htmlFor="salis"> Įveskite šalį </label>
        <input ref={salisInputRef} type="text" id="salis" />
        <button onClick={onIvestiClick}> Įvesti </button>
      </div>
      <p> Jūs įvedėte: {salis}</p>
    </>
  );
};

export default Komp1;

import { useState } from "react";
import useInput from "../hooks/useInput";

const Komp3 = () => {
  const nameInput = useInput("");
  const ageInput = useInput("");

  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setName(nameInput.value);
    setAge(ageInput.value);
  };

  return (
    <div>
      <h3> Form input pvz </h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...nameInput} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" {...ageInput} />
        </div>
        <button type="submit">submit</button>
        <p> Mano vardas: {name}</p>
        <p> Man yra {age} metai</p>
      </form>
    </div>
  );
};
export default Komp3;

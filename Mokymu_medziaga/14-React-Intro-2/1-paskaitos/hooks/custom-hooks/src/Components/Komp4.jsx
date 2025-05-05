import useLocalStorage from "../hooks/useLocalStorage";

const Komp4 = () => {
  const [storedValue, setValue] = useLocalStorage("kursas is custom hooks");

  const addDataWithoutHook = () => {
    localStorage.setItem("kursas", "react mokymai");
  };

  const addDataWithHook = () => {
    // setValue("react - mokymai  iš custom hooks");
    setValue({
      vardas: "Jonas",
      role: "admin",
    });
  };

  const duokManReiksmeIsLocalStorage = () => {
    if (typeof storedValue === "object") {
      return "objektas";
    }

    return storedValue ? storedValue : "duomenų nėra";
  };

  return (
    <div>
      <h3> local storage pvz</h3>
      <button onClick={addDataWithoutHook}>Add data without hook</button>
      <button onClick={addDataWithHook}>Add data with hook</button>
      <p>{duokManReiksmeIsLocalStorage()}</p>
    </div>
  );
};
export default Komp4;

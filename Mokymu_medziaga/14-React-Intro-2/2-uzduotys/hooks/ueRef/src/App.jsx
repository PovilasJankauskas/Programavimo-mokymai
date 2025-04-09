import "./App.css";
import Kelione from "./components/Kelione";
import Kepyklele from "./components/Kepyklele";
import MedzioApdirbejas from "./components/MedzioApdirbejas";
import Prekes from "./components/Prekes";
import Skaicius from "./components/Skaicius";
import Temperaturos from "./components/Temperaturos";

function App() {
  return (
    <>
      <Kepyklele />
      <hr />
      <Prekes />
      <hr />
      <Temperaturos />
      <hr />
      <MedzioApdirbejas />
      <hr />
      <Kelione />
      <hr />
      <Skaicius />
      <hr />
    </>
  );
}

export default App;

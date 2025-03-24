import "./App.css";
import Darbuotojas from "./components/Darbuotojas";
import PrekiuKrepselis from "./components/PrekiuKrepselis";
import Skaicius from "./components/Skaicius";
import TrysSkaiciai from "./components/TrysSkaiciai";
import ZodzioIgis from "./components/ZodzioIlgis";

function App() {
  return (
    <>
      <ZodzioIgis />
      <hr />
      <Skaicius />
      <hr />
      <TrysSkaiciai />
      <hr />
      <hr />
      <Darbuotojas />
      <hr />
      <hr />
      <PrekiuKrepselis />
      <hr />
    </>
  );
}

export default App;

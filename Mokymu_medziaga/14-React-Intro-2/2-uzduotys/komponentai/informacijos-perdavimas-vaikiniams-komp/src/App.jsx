import "./App.css";
import Pardavejas from "./components/AutoPardavejas/Pardavejas";
import Imone from "./components/Bonusai/Imone";
import HobiuParduotuve from "./components/Deliones/HobiuParduotuve";
import Modulis from "./components/MokymuInfo/Modulis";
import Pasaulis from "./components/PasaulioInfo/Pasaulis";
import Kategorija from "./components/Portalas/Kategorija";
import VisosRoles from "./components/Roles/VisosRoles";
import Studentas from "./components/StudentoInfo/Studentas";

function App() {
  return (
    <>
      <Modulis />
      <hr />
      <Kategorija />
      <hr />
      <Pasaulis />
      <hr />
      <VisosRoles />
      <hr />
      <Imone />
      <hr />
      <Pardavejas />
      <hr />
      <HobiuParduotuve />
      <hr />
      <Studentas />
      <hr />
    </>
  );
}

export default App;

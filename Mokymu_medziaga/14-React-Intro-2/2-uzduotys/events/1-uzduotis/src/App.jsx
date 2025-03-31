import "./App.css";
import GeriausiasMedis from "./components/GeriausiasMedis";
import Laimejimas from "./components/Laimejimas";
import PrieLentos from "./components/PrieLentos";
import Sansas from "./components/Sansas";
import Skaiciai from "./components/Skaiciai";
import Tikrinimai from "./components/Tikrinimai";

function App() {
  return (
    <>
      <PrieLentos />
      <hr />
      <Skaiciai />
      <hr />
      <GeriausiasMedis />
      <hr />
      <Tikrinimai />
      <hr />
      <Sansas />
      <hr />
      <Laimejimas />
    </>
  );
}

export default App;

import "./App.css";
import CounterTev from "./components/Counter/CounterTev";
import KnyguBendras from "./components/Knygos/KnyguBendras";
import ZodziuBendras from "./components/Zodziai/ZodziuBendras";

function App() {
  return (
    <>
      <KnyguBendras />
      <hr />
      <ZodziuBendras />
      <hr />
      <CounterTev />
      <hr />
    </>
  );
}

export default App;

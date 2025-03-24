import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tekstas from "../komponentai/Tekstas";
import Pirkiniai from "../komponentai/Pirkiniai";
import Header from "../komponentai/Header";
import Paslaugos from "../komponentai/Paslaugos";

function App() {
  return (
    <>
      <Header />
      <Tekstas />
      <Pirkiniai />
      <Paslaugos />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "../komponentaiTinklapiui/NavBar";
import Header from "../komponentaiTinklapiui/Header";
import Paslaugos from "../komponentaiTinklapiui/Paslaugos";
import ApieMus from "../komponentaiTinklapiui/ApieMus";
import Footer from "../komponentaiTinklapiui/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Paslaugos />
      <ApieMus />
      <Footer />
    </>
  );
}

export default App;

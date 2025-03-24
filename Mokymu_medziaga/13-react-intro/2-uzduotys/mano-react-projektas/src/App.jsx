import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ItemList from "./components/ItemList";
import ArraysList from "./components/ArraysList";
import Card from "./components/card";
import VartotojoProfilis from "./components/usercomponents/VartotojoProfilis";
import ProduktoKortele from "./components/usercomponents/ProduktoKortele";
import Kontaktai from "./components/usercomponents/Kontaktai";
import Automobilis from "./components/usercomponents/Automobilis";*/
import KnyguSarasas from "./components/usercomponents/KnyguSarasas";

function App() {
  return (
    <div className="App">
      {/*<Header />
      <MainContent />
      <ItemList />
      <Card title="Kortelė" />
      <Card> Katės </Card>
      <ArraysList />
      <Footer />
      <VartotojoProfilis
        vardas="Povilas"
        pavarde="Jankauskas"
        megstamaSpalva="Mėlyna"
      /> 
      <ProduktoKortele
        Title="Knyga"
        Pavadinimas="React for dummies"
        Aprasymas="Viskas apie react! Kodėl verta lysti į šią kankynę?"
        Kaina="Neįkainojama"
      >
        Jei nori kažką išmokti skaityk "knygą" pagal lektorių
      </ProduktoKortele>
      <ProduktoKortele
        Title="Knyga"
        Pavadinimas="React for dummies"
        Aprasymas="Viskas apie react! Kodėl verta lysti į šią kankynę?"
        Kaina="Neįkainojama"
      >
        Jei nori kažką išmokti skaityk "knygą" pagal lektorių
      </ProduktoKortele>
      <Kontaktai />
      <Automobilis
        Marke="Audi"
        Modelis="Bulka"
        Metai="1986"
        VariklioTuris="2.9 L"
        Kaina="123456788 eur"
      />*/}
      <KnyguSarasas />
    </div>
  );
}
export default App;

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/products/Products";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;

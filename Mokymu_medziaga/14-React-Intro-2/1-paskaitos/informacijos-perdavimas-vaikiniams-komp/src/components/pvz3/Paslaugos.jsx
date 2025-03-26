import Paslauga from "./Paslauga";

const Paslaugos = () => {
  return (
    <div>
      <h2> Paslaugos</h2>
      <Paslauga pavadinimas="Puošimas" kategorija="Konditerija" />
      <Paslauga pavadinimas="Kavos ruošimas" kategorija="Baras" />
      <Paslauga pavadinimas="Dekoravimas" kategorija="Konditerija" />
    </div>
  );
};

export default Paslaugos;

import "./ProduktoKortele.css";

const ProduktoKortele = ({
  Title,
  Pavadinimas,
  Aprasymas,
  Kaina,
  children,
}) => {
  return (
    <div className="ProduktoKortele">
      <h3>Produktas: {Title}</h3>
      <h4>Pavadinimas: {Pavadinimas}</h4>
      <p>Aprašymas: {Aprasymas}</p>
      <p>Kaina: {Kaina}</p>
      <p>{children}</p>
    </div>
  );
};

export default ProduktoKortele;

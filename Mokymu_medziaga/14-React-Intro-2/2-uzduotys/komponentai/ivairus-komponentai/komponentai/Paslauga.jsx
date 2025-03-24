const Paslauga = () => {
  let sveikinimas = "Labas, mano vardas Mikis";
  let papildomaInfo = "Įvaikink mane";
  return (
    <main className="paslauga-card">
      <p>{sveikinimas}</p>
      <p>{papildomaInfo}</p>
      <img src="./foto/cat1.jpg" alt=" cat" />
    </main>
  );
};

export default Paslauga;

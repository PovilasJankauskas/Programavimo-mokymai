const VartotojoProfilis = ({ vardas, pavarde, megstamaSpalva }) => {
  return (
    <div className="VartotojoProfilis">
      <h2>Vardas: {vardas}</h2>
      <h2>Pavardė: {pavarde}</h2>
      <p>Mėgstama spalva: {megstamaSpalva}</p>
    </div>
  );
};

export default VartotojoProfilis;

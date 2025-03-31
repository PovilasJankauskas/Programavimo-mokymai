const Darbuotojai = ({ vardas, pavarde, bonusas }) => {
  const bonusoDydis = () => {
    if (!bonusas === 0) {
      return "gailyšnikai";
    } else if (bonusas >= 0 && bonusas < 100) {
      return "bent and kebabo užmete";
    } else if (bonusas >= 100) {
      return " jau panašiau";
    }
  };

  return (
    <div>
      <h2>Kalėdų bonusai darbuotojams</h2>
      <h4>
        Vardas: {vardas} - Pavardė: {pavarde}
      </h4>
      <p>{bonusas}</p>
      <p>{bonusoDydis()}</p>
    </div>
  );
};
export default Darbuotojai;

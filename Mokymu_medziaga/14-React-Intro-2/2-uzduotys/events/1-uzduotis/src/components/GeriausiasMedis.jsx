const GeriausiasMedis = () => {
  const geriausiasMedis = (pavadinimas) => {
    if (pavadinimas === "Povilas") {
      alert(`Povilas yra pats didžiausias medis`);
    } else if (pavadinimas === "Ąžuolas") {
      alert(`Ąžuolas yra seniausias medis`);
    } else if (pavadinimas === "Klevas") {
      alert(`Klevas yra gražiausias medis`);
    }
  };

  return (
    <>
      <h4>Medžiai</h4>
      <button onClick={() => geriausiasMedis("Povilas")}> Povilas</button>
      <button onClick={() => geriausiasMedis("Ąžuolas")}> Ąžuolas</button>
      <button onClick={() => geriausiasMedis("Klevas")}> Klevas </button>
      <h4> Geriausias medis </h4>
    </>
  );
};
export default GeriausiasMedis;

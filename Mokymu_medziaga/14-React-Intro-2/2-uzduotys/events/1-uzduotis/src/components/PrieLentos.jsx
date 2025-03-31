const PrieLentos = () => {
  let studentuMasyvas = ["Mantas", "Jonas", "Povilas", "Petras"];
  function randomVaikas() {
    const atsitiktinisIndex = Math.floor(
      Math.random() * studentuMasyvas.length
    );
    const pasirinktasVaikis = studentuMasyvas[atsitiktinisIndex];
    alert(`Siandien kankinsis: ${pasirinktasVaikis}`);
  }
  return (
    <div>
      <h2>EinaPrieLentos</h2>
      <button onClick={randomVaikas}>Prie lentos eis</button>
    </div>
  );
};
export default PrieLentos;

/* const Studentai = () => {
  const studentai = ['Vilma', 'Tomas', 'Vaiva', 'Roro', 'Mantas'];

  const pasirinkStudenta = () => {
    const atsitiktinisStudentas = studentai[Math.floor(Math.random() * studentai.length)];
    alert(`Studentas : ${atsitiktinisStudentas}`);
  };
  

  return (
    <div>
      <h3>Atsirinktinis studentas</h3>
      <p>{studentai.join(' ')}</p>
      <button onClick={pasirinkStudenta}>Atsitiktinis studentas</button>
    </div>
  );
};

export default Studentai;
*/

const Skaiciai = () => {
  let skaiciuMasyvas = [3, 5, 8, 12, 7, 15, 24, 13];

  function skaiciuSuma() {
    alert(skaiciuMasyvas.reduce((sum, digit) => sum + parseInt(digit), 0));
  }

  function didziausiasSkaicius() {
    alert(Math.max(...skaiciuMasyvas));
  }
  return (
    <>
      <h4>Skaičiai</h4>
      <button onClick={skaiciuSuma}> Skaičių suma </button>
      <button onClick={didziausiasSkaicius}> Didžiausias skaičius</button>
    </>
  );
};
export default Skaiciai;

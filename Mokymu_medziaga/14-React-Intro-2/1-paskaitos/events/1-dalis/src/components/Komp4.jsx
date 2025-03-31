const Komp4 = () => {
  const handlerOne = () => {
    alert("Pirmas");
  };
  const handlerTwo = () => {
    alert("Antras");
  };

  return (
    <>
      <h4> Komp 4</h4>
      <button onClick={handlerOne}> Pirmas</button>
      <button onClick={handlerTwo}>Antras</button>
      <button onClick={handlerTwo}>Trečias</button>
    </>
  );
};
export default Komp4;

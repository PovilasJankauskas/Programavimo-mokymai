const Komp8 = () => {
  let slaptasSkaicius = Math.floor(Math.random() * 3) + 1;
  const speti1Handler = () => {
    console.log(slaptasSkaicius === 1 ? "Atspėjote - 1" : "Oops - 1");
  };
  const speti2Handler = () => {
    console.log(slaptasSkaicius === 2 ? "Atspėjote - 2" : "Oops - 2");
  };
  const speti3Handler = () => {
    console.log(slaptasSkaicius === 3 ? "Atspėjote - 3" : "Oops - 3");
  };
  return (
    <>
      <h3>Komp 8 </h3>
      <button onClick={speti1Handler}> Spėjimas 1</button>
      <button onClick={speti2Handler}> Spėjimas 2</button>
      <button onClick={speti3Handler}> Spėjimas 3</button>
    </>
  );
};

export default Komp8;

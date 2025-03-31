const Komp9 = () => {
  let slaptasSkaicius = Math.floor(Math.random() * 3) + 1;
  const spetiSkHandler = (spejimas) => {
    console.log(slaptasSkaicius === spejimas ? "Atspejote" : "Bandyk kartą");
  };
  return (
    <>
      <h4>Komp9</h4>
      <button onClick={() => spetiSkHandler(1)}> Spėjimas 1</button>
      <button onClick={() => spetiSkHandler(2)}> Spėjimas 2</button>
      <button onClick={() => spetiSkHandler(3)}> Spėjimas 3</button>
    </>
  );
};
export default Komp9;

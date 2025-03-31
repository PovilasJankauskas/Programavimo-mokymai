const Komp6 = () => {
  const slaptasHandler = () => {
    let slaptasSk = Math.floor(Math.random() * 10 + 1);
    console.log(slaptasSk);
    alert(slaptasSk);
  };
  return (
    <>
      <h4> Komp 6</h4>
      <button onClick={slaptasHandler}> slaptas skaičius</button>
    </>
  );
};
export default Komp6;

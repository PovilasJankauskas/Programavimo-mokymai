const LyginisArNe = () => {
  const arLyginis = (event) => {
    let skaicius = event.target.value;

    if (skaicius % 2 === 0) {
      console.log("skaičius lyginis");
    } else {
      console.log("skaičius nelyginis ");
    }
  };

  return (
    <>
      <h4>Lyginis ar ne?</h4>
      <input type="number" onInput={arLyginis} />
    </>
  );
};
export default LyginisArNe;

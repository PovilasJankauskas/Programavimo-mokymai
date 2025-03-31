const Komp3 = () => {
  let zodis = "Ąžuolas";
  const inputHandler = (e /*čia e = event*/) => {
    let ivestasZodis = e.target.value;

    if ((zodis = ivestasZodis)) {
      console.log("bam, atspėjai");
    } else {
      console.log("bandyk dar kartą");
    }
  };
  return (
    <>
      <h4>Komp3</h4>

      <input type="text" onChange={inputHandler} />
    </>
  );
};
export default Komp3;

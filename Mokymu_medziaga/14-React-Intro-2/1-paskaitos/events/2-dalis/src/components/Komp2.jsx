const Komp2 = () => {
  const inputHandler = (event) => {
    // console.log(event.target.value);

    let value = event.target.value;

    if (value > 100) {
      console.log("ivestas skaičius didesnis už 100");
    } else {
      console.log("įvestas skaičius mažesnis už 100 ");
    }
  };
  return (
    <>
      <h4>Komp2</h4>
      <input type="number" onInput={inputHandler} />
    </>
  );
};
export default Komp2;

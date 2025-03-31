const Komp7 = () => {
  let skaiciukas = 4;

  const patikrintiHandler = () => {
    if (skaiciukas > 10) {
      console.log("didesnis uz 10");
    } else {
      console.log("mazesnis arba lygus 10");
    }
  };
  return (
    <>
      <h4>Komp7</h4>
      <button onClick={patikrintiHandler}>Patikrink skaičių </button>
    </>
  );
};
export default Komp7;

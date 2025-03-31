const Komp1 = () => {
  const tekstoHandler = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);

    let tekstas = event.target.value;
    if (tekstas.length > 6) {
      console.log("tekstas didėja");
    }
  };
  return (
    <>
      <h4>Komp1</h4>
      <input type="text" onInput={tekstoHandler} />
    </>
  );
};
export default Komp1;

const Komp3 = () => {
  const mygtukasHandler = () => {
    console.log(" clicked button");
  };

  const pvz = "pvz";

  return (
    <div>
      <h4> Komp3</h4>
      <button onClick={mygtukasHandler}> Mygtukas</button>
      <input value={pvz}></input>
      <button> Antras mygtukas</button> {/*nieko nedaro nes nėra onClick */}
      <button> dar vienas mygtukas</button> {/*nieko nedaro nes nėra onClick */}
    </div>
  );
};
export default Komp3;

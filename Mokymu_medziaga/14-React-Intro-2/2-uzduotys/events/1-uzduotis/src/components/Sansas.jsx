const Sansas = () => {
  const skaicius = Math.floor(Math.random() * 10) + 1;

  let arLaimejai = () => {
    if (skaicius >= 5) {
      alert("Sveikinu, laimėjai");
    } else if (skaicius < 5 && skaicius === 0) {
      alert("Ooops, bandyk dar kartą");
    }
  };

  return (
    <>
      <h4> Tavo šansas </h4>
      <button onClick={arLaimejai}> Čia tavo šancas </button>
    </>
  );
};
export default Sansas;

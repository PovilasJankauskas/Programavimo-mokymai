const Salis = (props) => {
  let { pavadinimas, zemynas } = props.sal;
  const tikrintiZemyna = () => {
    if (zemynas === "Europa") {
      return "Jėga!";
    }
    return "";
  };

  return (
    <div>
      <h2>Salis</h2>
      <h4>
        {pavadinimas} yra zemyne: {zemynas}
      </h4>
      <p>{tikrintiZemyna()}</p>
    </div>
  );
};

export default Salis;

const Diena = (props) => {
  console.log(props);

  const arImtiLietsargi = (temperatura) => {
    if (temperatura > 5) {
      return "kam tas lietsargis";
    } else {
      return "pasiimk, gal lis";
    }
  };

  return (
    <div>
      <h3>Dienos temperatura: {props.temp} </h3>
      <p>{arImtiLietsargi(props.temp)}</p>
    </div>
  );
};
export default Diena;

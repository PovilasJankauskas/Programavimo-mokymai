const TekstoVaik = (props) => {
  const patikrinimas = () => {
    if (
      props.tekstas &&
      props.tekstas.split("").filter((r) => r === "a").length > 0
    ) {
      return 'tekste yra "a" raidė';
    } else {
      return 'tekste nera "a" raidzių';
    }
  };
  return (
    <div>
      <p>
        Gautas tekstas:
        {props.tekstas ? (
          <strong>
            {/*viduje gaunant propsus galaima daryti įvairius veiksmus */}
            ilgis: {props.tekstas.length} - reikšmė: {props.tekstas}
          </strong>
        ) : (
          ""
        )}
        {props.tekstas}
        {props?.skaicius}
        {/*čia "?" tikrinama prieš objekto tikrinima, jei jame yra objektas naudojame, jei nera ne */}
        <div> {patikrinimas()} </div>
      </p>
    </div>
  );
};

export default TekstoVaik;

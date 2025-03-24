const ApieAutomobili = ({ Marke, Modelis, Metai, VariklioTuris, Kaina }) => {
  return (
    <div className="Auto-kortele">
      <h3>Automobilio marke: {Marke}</h3>
      <h4>Modelis: {Modelis}</h4>
      <p>Gamybs metai: {Metai}</p>
      <p>Variklio tūris: {VariklioTuris}</p>
      <p>Kaina: {Kaina}</p>
    </div>
  );
};

export default ApieAutomobili;

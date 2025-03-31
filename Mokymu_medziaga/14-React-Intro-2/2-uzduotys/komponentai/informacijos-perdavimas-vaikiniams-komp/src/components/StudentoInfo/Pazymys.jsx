const Pazymys = ({ value }) => {
  const ivertinimas = value >= 5 ? "Teigiamas" : "Neigiamas";

  return (
    <div>
      <p>
        Pažymys: {value} {ivertinimas}
      </p>
    </div>
  );
};
export default Pazymys;

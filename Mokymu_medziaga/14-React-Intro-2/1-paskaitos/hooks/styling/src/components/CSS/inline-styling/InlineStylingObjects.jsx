const InlineStylingObjects = () => {
  let divContainer = { display: "flex", color: "blue", margin: "30px" };
  textColor = { color: "pink" };

  let colorValue = "red";
  let isPrimary = true;

  return (
    <div style={divContainer}>
      <h1 style={textColor}> Inline CSS</h1>
      <p> Mokomes inline CSS </p>
      <p style={{ color: isPrimary ? "red" : "green" }}>Nepasiduodam mokytis</p>
      <p style={{ color: colorValue }}>Nepasiduodam mokytis, trečias būdas</p>
    </div>
  );
};

export default InlineStylingObjects;

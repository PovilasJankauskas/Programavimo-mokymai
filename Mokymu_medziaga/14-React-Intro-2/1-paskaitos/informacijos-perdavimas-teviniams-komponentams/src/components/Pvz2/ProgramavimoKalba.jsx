const ProgramavimoKalba = (props) => {
  const onClick = (language) => {
    console.log(language);
    props.kalbosPasirinkimas(language);
  };

  return (
    <div>
      <h3>Programavimo</h3>
      <button onClick={() => onClick("JavaScript")}>Java Script</button>
      <button onClick={() => onClick("PHP")}>PHP</button>
      <button onClick={() => onClick("C#")}>C#</button>
      <button onClick={() => onClick("Nepasirinkta")}>Nepasirinkta</button>
    </div>
  );
};

export default ProgramavimoKalba;

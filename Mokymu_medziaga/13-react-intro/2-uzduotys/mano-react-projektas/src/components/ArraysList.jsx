function ArrayList() {
  const items = [
    "Smagu kol viskas copy paste",
    "Bet kuo toliau tuo labiau katės spagečiuose",
  ];
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Nėra duomenų</p>
      )}
    </div>
  );
}
export default ArrayList;

function ItemList() {
  const items = ["Oranžinė katė", "Nematoma katė", "kam tos katės?"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ItemList;

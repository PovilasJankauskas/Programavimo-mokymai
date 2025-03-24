function KontaktuSarasas() {
  const kontaktai = ["087654321, Povilas, dirikas"];
  return (
    <>
      <h3> perekupo kontaktų sąrašas </h3>
      <ul>
        {kontaktai.map((kontaktai, index) => (
          <li key={index}>{kontaktai}</li>
        ))}
      </ul>
      <p> Perekupas parduoda </p>
    </>
  );
}
export default KontaktuSarasas;

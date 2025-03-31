const Role = ({ pavadinimas, kiekis }) => {
  // const arDaugVartotoju = () => {
  //     if (kiekis >= 20) {
  //         return 'Vartotoju skaicius didelis'
  //     } else {
  //         return 'Vartotojus skaicius mazas'
  //     }
  // };
  const arDaugVartotoju = (kiekis) => {
    return kiekis >= 20
      ? "Vartotoju skaicius didelis"
      : "Vartotoju skaicius mazas";
  };

  return (
    <div>
      <h2>Role</h2>
      <h4>
        {pavadinimas} - {kiekis}
      </h4>
      <p>{arDaugVartotoju(kiekis)}</p>
    </div>
  );
};
export default Role;

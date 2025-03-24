const PrekiuKrepselis = () => {
  const prekes = [
    {
      id: 1,
      pavadinimas: "Keksiukas",
      kaina: 2.9,
      kiekis: 1,
      nuolaida: false,
    },
    {
      id: 2,
      pavadinimas: "Ekleras",
      kaina: 3.9,
      kiekis: 1,
      nuolaida: true,
    },
    {
      id: 3,
      pavadinimas: "Pudingas",
      kaina: 3.8,
      kiekis: 1,
      nuolaida: true,
    },
    {
      id: 4,
      pavadinimas: "Kruasanas",
      kaina: 2.2,
      kiekis: 1,
      nuolaida: false,
    },
  ];

  const arTaikomaNuolaida = (kaina, nuolaida) => {
    if (nuolaida === true) {
      return (kaina * 0.8).toFixed(2);
    } else {
      return kaina.toFixed(2);
    }
  };

  const bendraNuolaida = () => {
    return;
  };
  return (
    <>
      <h1> Prekiu krepšelis </h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th width="55%">Desertas</th>
            <th width="25%">Kaina</th>
            <th width="25%">Kaina su nuolaida</th>
            <th width="20%">Vnt.</th>
            <th>Nuolaida</th>
          </tr>
        </thead>
        <tbody>
          {prekes.map((preke) => {
            return (
              <tr key={preke.id}>
                <td>{preke.id}</td>
                <td>{preke.pavadinimas}</td>
                <td>{preke.kaina}</td>
                <td>{arTaikomaNuolaida(preke.kaina, preke.nuolaida)}</td>
                <td>{preke.kiekis}</td>
                <td>{preke.nuolaida ? "Taikoma" : "Netaikoma"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <strong>Bendra nuolaida:</strong>
      </p>
    </>
  );
};

export default PrekiuKrepselis;

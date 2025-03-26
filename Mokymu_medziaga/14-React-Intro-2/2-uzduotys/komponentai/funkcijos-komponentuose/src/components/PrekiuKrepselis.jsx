const PrekiuKrepselis = () => {
  const prekes = [
    {
      id: 1,
      pavadinimas: "Keksiukas",
      kaina: 2.9,
      kiekis: 10,
      nuolaida: false,
    },
    {
      id: 2,
      pavadinimas: "Ekleras",
      kaina: 3.9,
      kiekis: 51,
      nuolaida: true,
    },
    {
      id: 3,
      pavadinimas: "Pudingas",
      kaina: 3.8,
      kiekis: 34,
      nuolaida: true,
    },
    {
      id: 4,
      pavadinimas: "Kruasanas",
      kaina: 2.2,
      kiekis: 29,
      nuolaida: false,
    },
  ];

  const prekiuLentele = (prekiuSarasas) => {
    return (
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
          {prekiuSarasas.map((preke) => {
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
    );
  };
  const arTaikomaNuolaida = (kaina, nuolaida) => {
    if (nuolaida === true) {
      return (kaina * 0.8).toFixed(2);
    } else {
      return kaina.toFixed(2);
    }
  };

  const bendraNuolaida = (prekes) => {
    let bendraNuolaidosSuma = 0;
    prekes.forEach((preke) => {
      if (preke.nuolaida === true) {
        bendraNuolaidosSuma += preke.kaina * 0.2 * preke.kiekis;
      }
    });
    return bendraNuolaidosSuma.toFixed(2);
  };

  const bendraKrepselioVerte = (prekes) => {
    let bendraKrepselioSuma = 0;
    prekes.forEach((preke) => {
      let kainaSuNuolaida = parseFloat(
        arTaikomaNuolaida(preke.kaina, preke.nuolaida)
      );
      bendraKrepselioSuma += kainaSuNuolaida * preke.kiekis;
    });
    return bendraKrepselioSuma.toFixed(2);
  };

  const atrinktiPagalKaina = (riba) => {
    return prekes.filter((preke) => preke.kaina > riba);
  };

  return (
    <>
      <h1>Prekių krepšelis</h1>
      {prekiuLentele(prekes)}
      <p>
        <strong>Bendra nuolaida: {bendraNuolaida(prekes)} €</strong>
      </p>
      <p>
        <strong>
          Bendra krepšelio vertė: {bendraKrepselioVerte(prekes)} €
        </strong>
      </p>
      <div>{prekiuLentele(atrinktiPagalKaina(3))}</div>
    </>
  );
};

export default PrekiuKrepselis;

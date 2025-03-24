const Komponentas8 = () => {
  let prekes = [
    { id: 1, pavadinimas: "Keksiukas", kaina: 3.0, kiekis: 68 },
    { id: 2, pavadinimas: "Ekleras", kaina: 4.7, kiekis: 29 },
    { id: 3, pavadinimas: "Tinginiukas", kaina: 2.9, kiekis: 102 },
    { id: 4, pavadinimas: "Pudingas", kaina: 3.3, kiekis: 63 },
    { id: 4, pavadinimas: "Kruasanas", kaina: 2.2, kiekis: 236 },
  ];

  return (
    <div className="prekiu-wrapper">
      <h2> Prekės </h2>
      <div className="prekiu-list">
        {prekes.length > 0 ? (
          prekes.map((preke) => {
            return (
              <div className="prekes-blokas" key={preke.id}>
                {/*gali būti index vietoj preke.id*/}
                <h3>{preke.pavadinimas}</h3>
                <p>Kaina: {preke.kaina}</p>
                <p> Likutis: {prekes.kiekis}</p>
              </div>
            );
          })
        ) : (
          <p>Gaila, bet viskas išpirkta</p>
        )}
      </div>
    </div>
  );
};

export default Komponentas8;

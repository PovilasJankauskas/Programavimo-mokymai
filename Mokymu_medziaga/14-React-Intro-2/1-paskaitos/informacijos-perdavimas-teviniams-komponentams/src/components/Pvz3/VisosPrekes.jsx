const VisosPrekes = (props) => {
  let prekes = props.data;
  console.log(prekes);

  return (
    <div>
      <h2> Visos</h2>
      {prekes.length > 0 && (
        <div>
          {prekes.map((preke) => {
            return (
              <div key={preke.id}>
                <h4>{preke.pavadinimas}</h4>
                <p>
                  kiekis:{preke.kiekis}, kaina: {preke.kaina}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      {prekes.length === 0 && <p> prekių nėra</p>}
    </div>
  );
};
export default VisosPrekes;

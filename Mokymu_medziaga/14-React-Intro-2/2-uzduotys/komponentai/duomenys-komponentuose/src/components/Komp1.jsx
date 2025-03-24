// TODO: prijunkite šį komponentą prie App.jsx

const Komp1 = () => {
  let vardas = "Jonas";
  let amzius = 25;

  return (
    // TODO: šiame div sukurkite h1 elementą,
    // kuriame būtų atvaizduotas vardas ir amžius
    <div>
      <h1>
        Vardas: <strong>{vardas}</strong>, amzius: <strong>{amzius}</strong>
      </h1>
    </div>
  );
};

export default Komp1;

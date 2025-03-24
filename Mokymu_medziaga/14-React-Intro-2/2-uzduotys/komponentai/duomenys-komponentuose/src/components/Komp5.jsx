// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
  let spalvos = ["raudona", "geltona", "žalia", "mėlyna", "violetinė"];

  return (
    // TODO: atvaizduokite visas spalvas
    // naudodami map funkciją, įdėdami viską
    // į rikiuotą sąrašą (ol)
    <div>
      <h1> Spalvos </h1>
      <ol>
        {spalvos.map((spalva) => {
          return (
            <li key={spalva}>
              <p>{spalva}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Komp5;

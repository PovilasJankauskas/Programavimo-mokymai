// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
  let temperaturos = [15, 20, 25, 30, 35, 40];

  return (
    // TODO: atvaizduokite visas temperatūras
    // naudodami map funkciją, įdėdami viską
    // į lentelę (table),
    // kurioje būtų du stulpeliai:
    // 1. eilutės numeris (1, 2, 3, ...)
    // 2. temperatūra iš masyvo

    <div>
      <h1>Temperatūros</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th> Eil.nr.</th>
            <th>Temperatūra</th>
          </tr>
        </thead>
        <tbody>
          {temperaturos.map((temperatura, index) => {
            return (
              <tr key={temperatura}>
                <td>{index + 1} </td>
                <td>{temperatura} C</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Komp6;

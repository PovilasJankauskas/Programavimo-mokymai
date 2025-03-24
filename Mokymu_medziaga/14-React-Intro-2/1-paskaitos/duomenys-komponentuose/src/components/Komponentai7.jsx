const Komponentas7 = () => {
  let antraste = "Povilo žaidimai";

  let links = [
    { id: 1, url: "/", title: "Pradžia" },
    { id: 2, url: "/paslaugos", title: "Paslaugos" },
    { id: 3, url: "/apie-mus", title: "Apie mus" },
    { id: 4, url: "/kontaktai", title: "Kontaktai" },
  ];

  return (
    <div>
      <h1> {antraste}</h1>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Komponentas7;

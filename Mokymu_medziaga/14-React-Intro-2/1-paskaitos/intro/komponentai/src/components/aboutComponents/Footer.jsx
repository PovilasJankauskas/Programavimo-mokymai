const Footer = () => {
  const email = "manp@example.lt";
  const tel = "861234567";
  const adresas = "Vilnius";
  return (
    <div>
      <p> Mus galite rasti: {adresas}</p>
      <p> Mums paskambinti galite: {tel} </p>
      Rašyti el. paštu: {email}
    </div>
  );
};

export default Footer;

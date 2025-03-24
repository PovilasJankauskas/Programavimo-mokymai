function MainContent() {
  const sveikinimas = "Sveiki atvykę į mano svetainę!";
  const papildomaInfo = "Štai Jums katės nuotrauka:";
  return (
    <main className="main-content">
      <p>{sveikinimas}</p>
      <p>{papildomaInfo}</p>
      <img src="./public/cat1.jpg" alt=" cat" />
    </main>
  );
}
export default MainContent;

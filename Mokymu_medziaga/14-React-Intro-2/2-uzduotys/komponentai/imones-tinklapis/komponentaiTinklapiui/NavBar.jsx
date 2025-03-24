function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h4 style={{ margin: 20 }}>UAB Povkos Web</h4>
      <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <a href="/">Pradžia</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/about">Apie</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/contact">Kontaktai</a>
        </li>
        <li>
          <a href="/services">Paslaugos</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="Navigacija">
          <Navbar.Brand href="#home">Povkos biznis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Apie</Nav.Link>
              <Nav.Link href="#link">Paslaugos</Nav.Link>
              <Nav.Link href="#link">Produktai</Nav.Link>
              <Nav.Link href="#link">Kainos</Nav.Link>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;

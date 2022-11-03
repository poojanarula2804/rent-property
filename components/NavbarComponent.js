import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Real Estate Properties</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#rent">Rent</Nav.Link>
          <Nav.Link href="#buy">Buy</Nav.Link>
          <Nav.Link href="#sell">Sell</Nav.Link>
        </Nav>
        <Button variant="outline-secondary">
          Login
          </Button>
          <Button variant="outline-secondary">Sign Up</Button>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

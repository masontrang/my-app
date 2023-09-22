import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">MealPlanner 5001</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="addRecipes">Add Recipes</NavDropdown.Item>
              <NavDropdown.Item href="viewRecipes">
                View Recipes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="account">Settings</NavDropdown.Item>
              <NavDropdown.Item href="collaboration">
                Join/Leave Group
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

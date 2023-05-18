import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './Navigation.module.css'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className={style.container}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#" className={style.header}>Quizify</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
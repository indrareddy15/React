import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const noOfProducts = useSelector(state => state.cart)
    const cartProduct = noOfProducts.length;
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux ToolKit</Navbar.Brand>
                <Nav>
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>
            </Container>
            <NavbarToggle />
            <NavbarCollapse className='justify-content-end'>
                <Navbar.Text>
                    <Nav.Link to="/cart" as={Link}>My Bag {cartProduct}</Nav.Link>
                </Navbar.Text>
            </NavbarCollapse>
        </Navbar >
    );
}

export default NavBar;
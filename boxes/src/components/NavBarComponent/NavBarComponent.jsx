import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { ProductsData } from '../../data/productsData';
import logo from '../../images/logo2.png';

const uniqueCategories = Array.from(new Set(ProductsData.map(product => product.category)));
const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}><img src={logo} style={{height: "60px"}}/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Productos</Nav.Link>
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {uniqueCategories.map((category) => (
                                <Link to={`/category/${category}`} style={{ textDecoration: "none", color: "black", display: "flex", margin: "5px" }} key={category}>
                                    {category}
                                </Link>
                            ))}
                </NavDropdown>
            </Nav>
            <CartWidgetComponent />
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
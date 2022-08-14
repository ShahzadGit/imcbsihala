import Header from './Header'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import classNames from "classnames"; //This library is used for selecting multiple classes or for selecting a class based on some condition
import useSticky from "./hooks/useSticky";
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navigation() {
    const { sticky, stickyRef } = useSticky();
    return (
        <div>
            <Header />
            <div ref={stickyRef} className={classNames("nav flex", { sticky })} >
                <Navbar collapseOnSelect expand="lg" bg="lightgreen" variant="green" style={{ width: '100%', padding: '10px', backgroundColor: 'darkgreen', color: 'white', zIndex: '10' }}>
                    <Container >
                        <Link className='nav-brand' to="/">HOME</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto" >
                                <Link className='nav-brand' to="/admissions">Admissions</Link>
                                <Link className='nav-brand' to="/programs">Programs</Link>
                                <Link className='nav-brand' to="/faculty    ">Faculty</Link>
                                <Link className='nav-brand' to="/facilities">Facilities</Link>
                                <Link className='nav-brand' to="/about">About</Link>
                                {/* <Link className='nav-brand' to="/contact">Contact Us</Link> */}

                                {/* <Navbar.Brand className='nav-brand'><Link className='nav-brand' to="/admissions">Admissions</Link></Navbar.Brand>
                                <Navbar.Brand className='nav-brand'><Link to="programs">Programs</Link></Navbar.Brand>
                                <Navbar.Brand className='nav-brand'><Link to="faculty">Faculty</Link></Navbar.Brand>
                                <Navbar.Brand className='nav-brand'><Link to="facilities">Facilities</Link></Navbar.Brand>
                                <Navbar.Brand className='nav-brand'><Link to="about">About</Link></Navbar.Brand>
                                <Navbar.Brand className='nav-brand'><Link to="contact">Contact Us</Link></Navbar.Brand> */}

                                {/* <NavDropdown title="ACADEMICS" id="collasible-nav-dropdown" >
                                    <Navbar.Brand href="#home" style={{ color: 'white' }} >ACADEMICS</Navbar.Brand>
                                    <NavDropdown.Item href="#action/3.1">PROGRAMS</NavDropdown.Item><NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">FACULTY</NavDropdown.Item><NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.3">FEE STRUCTURE</NavDropdown.Item><NavDropdown.Divider />
                                </NavDropdown> */}

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            {sticky && (
                <div
                    style={{
                        height: `${stickyRef.current?.clientHeight}px`
                    }}
                />
            )}
        </div>
    );
}

export default Navigation;
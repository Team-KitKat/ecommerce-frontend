import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavigationBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" className='navigation-bar mx-0 px-xl-5 px-lg-5 px-md-4 px-sm-3'>
            {/*<Navbar.Brand className='brand' href="#home">LOGO</Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown" className='drop-down'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
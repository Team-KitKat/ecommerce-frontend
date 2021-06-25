import React from 'react';
import {Col, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavigationBar: React.FC = () => {
    return (
        <Col xs={12} className='m-0 nav-col'>
        <Navbar collapseOnSelect expand="lg"  variant="light" className='navigation-bar py-2 mx-0 px-xl-5 px-lg-5 px-md-4 px-sm-3'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categories" id="collasible-nav-dropdown" className='drop-down'>
                        <NavDropdown.Item href="#action/3.1">Grocery</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Pharmacy</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Electronic</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Col>
    );
};

export default NavigationBar;
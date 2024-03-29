import React from 'react';
import {Button, Col, Nav, Navbar, Row} from "react-bootstrap";

const Header: React.FC  = () => {

    return (
        <Col className='header m-0 p-0'>
            <Row className='justify-content-end p-0 m-0 top-header'>
                <Navbar expand='lg' className='px-0 px-sm-3 py-0'>
                    <i className='feather-phone-call'/>
                    <span className='header-menu pl-3 pr-3'> +94772 123 456</span>
                    <Col className='px-0 py-2 py-lg-0 text-right'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </Col>
                    <Navbar.Collapse id="basic-navbar-nav" className='p-0 m-0'>
                        <Nav className='m-lg-0 p-lg-0 pl-lg-3'>
                            <Nav.Link className=' '>
                                <i className='feather-truck'/>
                                <span className='header-menu pl-2'>Delivery Areas</span>
                            </Nav.Link>
                            <Nav.Link className='pl-lg-2'>
                            <i className='feather-user'/>
                                <span className='header-menu pl-lg-2'>My Account</span>
                            </Nav.Link>
                            <Nav.Link className='pt-lg-1 p-lg-0' href='/register'>
                                <Button className='register-btn mx-3 ' variant='outline-success'>
                                    Register</Button>
                            </Nav.Link>
                            <Nav.Link className='pt-lg-1 p-lg-0' href='/login'>
                                <Button className='login-btn p-lg-0' variant="outline-light">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Col>
    );
};

export default Header;
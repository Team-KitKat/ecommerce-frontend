import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Overlay, Popover, Row} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'
import EmptyCart from "../cartPreview/emptyCart/EmptyCart";
import CartPreview from "../cartPreview/CartPreview";

const Header: React.FC  = () => {

    return (
        <Col className='header m-0 p-0'>
            <Row className='justify-content-end p-0 m-0 top-header'>
                <Navbar expand='lg' className='py-0'>

                    <i className='feather-phone-call'/>
                    <span className='header-menu pl-3 pr-3'> +94772 123 456</span>

                    <Col  className='p-lg-0'>
                        <Col className='px-0 py-2 py-lg-0 text-right'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        </Col>
                        <Navbar.Collapse id="basic-navbar-nav" className='p-0 m-0'>
                            <Nav className='m-lg-0 p-lg-0 pl-lg-3'>
                                <Nav.Link className=' text-right'>
                                    <i className='feather-truck'/>
                                    <span className='header-menu pl-2'>Delivery Areas</span>
                                </Nav.Link>
                                <Nav.Link className='pl-lg-2 text-right'>
                                    <i className='feather-user'/>
                                    <span className='header-menu pl-lg-2'>My Account</span>
                                </Nav.Link>
                                <Nav.Link className='pt-lg-1 p-lg-0 text-right'>
                                    <Button className='register-btn pt-lg-0 px-lg-3 mx-lg-3' variant='outline-success'>
                                        Register</Button>
                                </Nav.Link>
                                <Nav.Link className='pt-lg-1 p-lg-0 text-right'>
                                    <Button className='login-btn p-lg-0' variant="outline-light">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>

                </Navbar>
            </Row>

        </Col>
    );
};

export default Header;
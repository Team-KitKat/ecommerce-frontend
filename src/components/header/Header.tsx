import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import {Button, Col, Container, Nav, Navbar, NavDropdown, Overlay, Popover, Row} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'
import EmptyCart from "../cartPreview/emptyCart/EmptyCart";
import CartPreview from "../cartPreview/CartPreview";

type HeaderTProps = {
    itemCount : number | 0
}

const Header: React.FC <HeaderTProps> = (props) => {
    const {itemCount} = props;
    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const [showItemCart, setShowItemCart] = useState(false);
    const [itemTarget, setItemTarget] = useState(null);
    const [emptyTarget, setEmptyTarget] = useState(null);

    const handleClick = (event: any) => {

        if(itemCount != 0) {
            setShowItemCart(!showItemCart);
            setItemTarget(event.target);
        }
        else {
            setShowEmptyCart(!showEmptyCart);
            setEmptyTarget(event.target);
        }
    };
    return (
        <Col xs={12} className='m-0 p-0 header'>
            <Col lg={{ span: 5, offset: 7 }} >
                <Navbar expand='lg' className='p-0'>
                    <Col lg={3} className='px-0 text-right'>
                        <i className='feather-phone-call'/> <span className='header-menu pl-2'> +94772 123 456</span>
                    </Col>
                            {/*<Navbar.Brand href="#home">rReact-Bootstrap</Navbar.Brand>*/}
                    <Col lg={9} className='p-0'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='p-0 m-0 align-content-end'>
                            {/*<Nav className="mr-auto">*/}
                            <Nav className='m-0 p-0 pl-3'>
                                {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                                <Nav.Link className='pl-4'>
                                    {/*<Col>*/}
                                        <i className='feather-truck'/> <span className='header-menu pl-2'>Delivery Areas</span>
                                    {/*</Col>*/}
                                </Nav.Link>
                                <Nav.Link className='pl-2'>
                                    {/*<Col>*/}
                                        <i className='feather-user'/> <span className='header-menu pl-1'>My Account</span>
                                    {/*</Col>*/}
                                </Nav.Link>
                                <Nav.Link className='pt-1 p-0'>
                                    {/*<Col className='text-right'>*/}
                                        <Button className='register-btn pt-0 px-2 mx-3' variant='outline-success'><span className='tt'>Register</span></Button>
                                    {/*</Col>*/}
                                </Nav.Link>
                                <Nav.Link className='pt-1 pr-0 text-right'>
                                    {/*<Col className='text-center'>*/}
                                        <Button className='login-btn p-0 ' variant="outline-light">Login</Button>
                                    {/*</Col>*/}
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>
            </Col>
                <hr className='m-0'/>
            <Col xs={12} className='px-sm-5 mx-sm-5 mt-3'>
                <Row className='pr-5 pb-3 pt-1 mr-sm-5 ml-sm-4 header-main '>
                    <Col className='brand' sm={2} xs={2}>LOGO</Col>
                    <Col lg={{ span: 2, offset: 7 }} md={{ span: 4, offset: 4 }} sm={{ span: 2, offset: 7 }} xs={{ span: 2, offset: 7 }}
                         className='text-right pr-sm-5 mr-sm-2'>
                        <Row>
                            <Col lg={7} md={9} sm={9}  className='p-0'>
                                <i className='feather-shopping-cart text-right' onClick={handleClick}>
                                    <span><Badge>{itemCount}</Badge></span>
                                </i>
                                <CartPreview showItemCart={showItemCart} target={itemTarget}/>
                                <EmptyCart showEmptyCart={showEmptyCart} target={emptyTarget}/>
                            </Col>
                            <Col lg={5} md={3} sm={3} className=''>
                                <Button variant="success" className='checkout-btn px-2 py-0'>Checkout</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*<hr style={{color: '#EBEDEF', backgroundColor: '#EBEDEF', height: 2}} />*/}
            </Col>
        </Col>
    );
};

export default Header;
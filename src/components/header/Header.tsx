import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Overlay, Popover, Row} from "react-bootstrap";
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
        <Col className='header m-0 p-0'>
            <Row className='justify-content-end p-0 m-0 top-header'>
                <Navbar expand='lg' className='py-0'>
                    {/*<Row className='m-0 p-0'>*/}
                    {/*<Row className='m-0 p-0'>*/}
                    {/*<div className=''>*/}
                    <i className='feather-phone-call'/>
                    <span className='header-menu pl-3 pr-3'> +94772 123 456</span>
                    {/*</div>*/}
                    {/*</Row>*/}
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
                    {/*</Row>*/}
                </Navbar>
            </Row>
            <Row>
            <Navbar sticky='top'  className='bottom-header navbar-expand'>
                <Col xs={12} className='header-card'>
                    <Row className='m-0 py-3'>
                        <Col className='brand ml-sm-3 ml-lg-0'
                             lg={{span: 2, offset: 2}} md={2} sm={2} xs={{span: 3, offset: 1}}>
                            <Row className='justify-content-end pl-md-4 ml-md-4 pl-sm-3 pt-1'>LOGO</Row>
                        </Col>
                        <Col className='p-0 pr-md-5 pl-sm-4 pr-lg-5'
                             lg={{span: 6, offset: 4}} md={{span: 3, offset: 6}}
                             sm={{span: 5, offset: 4}} xs={{span: 2, offset: 5}}>
                            <Row className='m-lg-0 mr-md-4 pr-md-4'>
                                <Col className='p-0' lg={{span: 2, offset: 7}} md={7} sm={3}>
                                    <Row className='justify-content-end m-0'>
                                    <i className='feather-shopping-cart text-right' onClick={handleClick}>
                                        <span><Badge>{itemCount}</Badge></span>
                                    </i>
                                    </Row>
                                    <CartPreview showItemCart={showItemCart} target={itemTarget}/>
                                    <EmptyCart showEmptyCart={showEmptyCart} target={emptyTarget}/>
                                </Col>
                                <Col className='p-0 px-2 checkout-btn-col' lg={{span: 3, offset: 0}} md={5} sm={3}>
                                    {/*<Row className='m-0'>*/}
                                        <Button variant="success" className='checkout-btn py-1'>Checkout</Button>
                                    {/*</Row>*/}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Navbar>
            </Row>
            {/*<Row>*/}
            {/*    <Col className='m-0 p-0'>*/}
            {/*        <hr className='m-0'/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row>*/}
            {/*    <Card className='header-card'>*/}
            {/*        /!*<Card.Body>*!/*/}
            {/*            <Col  className='brand py-4'>LOGO</Col>*/}
            {/*            <Col>*/}
            {/*                <Row className='justify-content-end'>checkout area</Row>*/}
            {/*            </Col>*/}
            {/*        /!*</Card.Body>*!/*/}
            {/*    </Card>*/}
            {/*</Row>*/}
        </Col>
    );
};

export default Header;
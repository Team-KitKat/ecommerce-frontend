import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import {Button, Col, Overlay, Popover, Row} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'
import {IClickOptions, TargetElement} from "@testing-library/user-event";
import EmptyCart from "../CartPreview/EmptyCart/EmptyCart";

type HeaderTProps = {
    itemCount : number | 0
    showCart : () => void
}

const Header: React.FC <HeaderTProps> = (props) => {

    const { itemCount, showCart } = props;
    return (
        <Col className='header p-2 px-xs-2'>
            <Col xl={{ span: 7, offset: 5 }} lg={{ span: 10, offset: 2 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                <Row>
                    <Col>
                        <i className='feather-truck'/> <span className='text'>Delivery Areas</span>
                    </Col>
                    <Col>
                        <i className='feather-phone-call'/> <span className='text'>+94 112 123 456</span>
                    </Col>
                    <Col className='text-right'>
                        <Button className='register-btn' variant='outline-success'>Register</Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='login-btn p-0' variant="outline-light">Login</Button>
                    </Col>
                </Row>
            </Col>
            <hr style={{color: '#EBEDEF', backgroundColor: '#EBEDEF', height: 2}} />
            <Col xs={12} className='px-md-5 px-xs-2'>
                <Row>
                    <Col xl={3} lg={6} xs={3} className='brand'>LOGO</Col>
                    <Col xl={{ span: 4, offset: 5 }} lg={{ span: 5, offset: 1 }} sm={{ span: 5, offset: 4 }} xs={{ span: 9, offset: 0 }} className='text-right'>
                        <Row>
                            <Col xs={5} sm={4} lg={5}>

                                    <i className='feather-shopping-cart' >
                                        <span><Badge>{itemCount}</Badge></span>
                                    </i>

                            </Col>
                            <Col xs={7} sm={8} lg={7} className='pr-md-4 px-xs-2'>
                                <Button variant="success" className='checkout-btn'>Check out</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Col>
    );
};

export default Header;
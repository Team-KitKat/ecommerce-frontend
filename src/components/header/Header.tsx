import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Badge from 'react-bootstrap/Badge'

type HeaderTProps = {
    itemCount : number | 0
    showCart : () => void
}

const Header: React.FC <HeaderTProps> = (props) => {
    const { itemCount, showCart } = props;
    return (
        <Col className='header p-2 px-md-4 px-xs-2'>
            <Col xl={{ span: 6, offset: 6 }} lg={{span: 10, offset: 2}} xs={12}>
                <Row>
                    <Col className='px-md-5'>
                        <i className='feather-truck'/> Delivery Areas
                    </Col>
                    <Col>
                        <i className='feather-phone-call'/> +94 112 123 456
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
                    <Col xs={6} className='brand'>LOGO</Col>
                    <Col md={{ span: 5, offset: 1 }} xs={6} className='text-right'>
                        <Row>
                            <Col md={7} xs={4} onClick={showCart}>
                                <i className='feather-shopping-cart'>
                                   <span><Badge>{itemCount}</Badge></span>
                                </i>
                            </Col>
                            <Col md={5} xs={8} className='pr-md-4 px-xs-2'>
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
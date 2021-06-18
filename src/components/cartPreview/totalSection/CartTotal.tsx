import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const CartTotal: React.FC = () => {
    return (
        <Container fluid={true} className='cart-total mb-2'>
            <Col xs={12}>
            <Row className='sub-total'>
                <Col xs={6} className=''>
                    <Row>
                        <Col>
                        <label>Sub Total</label>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                        <label>Discount</label>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} className=''>
                    <Row>
                        <Col>
                        <label className='text-danger font-weight-bold'>RS. 390</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label className='font-weight-bold'>Rs. 90</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='cart-net-total' xs={12} md={12} xl={12} lg={12}>
                <Col xs={6}>
                    <label>Total</label>
                </Col>
                <Col xs={6}>
                    <label className='text-danger font-weight-bold'>Rs. 300</label>
                </Col>
            </Row>
            </Col>
        </Container>
    );
};

export default CartTotal;
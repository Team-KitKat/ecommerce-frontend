import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CheckOutForm from "../PurchaseForm/CheckOutForm";
import CheckOutTable from "../checkOutTable/CheckOutTable";

const CheckoutPanel: React.FC = () => {
    return (

            <Container className='checkout-info py-5 px-0'>
                <Row className='m-0 p-0 checkout-title'>
                <Col xs={6} className='p-0 m-0'>
                    <h3>Checkout Page</h3>
                </Col>
                <Col xs={6} className='p-0 m-0'>
                    <Button type='button' variant='light' className='btn-shopping float-right'>Continue Shopping</Button>
                </Col>
                </Row>
                <Row className='p-0 m-0'>
                <Col xs={12} className="p-0 px-0 m-0 ">
                    <CheckOutTable/>
                </Col>
                </Row>
                <Row className='p-0 m-0'>
                <Col className="py-5 text-center" md={5} xs={12}>
                    <h3>discount banner</h3>
                </Col>
                <CheckOutForm/>
                </Row>
            </Container>
    );
};

export default CheckoutPanel;
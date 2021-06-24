import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CheckOutForm from "../PurchaseForm/CheckOutForm";
import CheckOutTable from "../checkOutTable/CheckOutTable";

const CheckoutPanel: React.FC = () => {
    return (

            <Container className='checkout-info p-0'>
                <Row className='p-0 m-0'>
                <Col xs={12} className="py-5 px-0 m-0 text-center">
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
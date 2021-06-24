import React from 'react';
import {Col, Row} from "react-bootstrap";
import CheckOutForm from "../PurchaseForm/CheckOutForm";

const CheckoutPanel: React.FC = () => {
    return (
        <div className="Container">
            <Row className='checkout-info mx-0'>
                <Col xs={12} className="py-5 text-center">
                    <h3>Items table</h3>
                </Col>
                <Col className="py-5 text-center" md={5} xs={12}>
                    <h3>discount banner</h3>
                </Col>
                <CheckOutForm/>
            </Row>
        </div>
    );
};

export default CheckoutPanel;
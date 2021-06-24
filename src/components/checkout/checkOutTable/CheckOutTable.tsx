import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const CheckOutTable: React.FC = () => {
    return (
        <Row className='checkout-table-title m-0 p-0'>
            <Col xs={6}>
                <h3>Checkout Page</h3>
            </Col>
            <Col xs={6}>
                <Button type='button' variant='light' className='btn-shopping'>Continue Shopping</Button>
            </Col>
        </Row>
    );
};

export default CheckOutTable;
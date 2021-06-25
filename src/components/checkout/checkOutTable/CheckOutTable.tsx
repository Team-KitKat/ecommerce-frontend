import React from 'react';
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import EmptyCheckout from "./EmptyCheckout";

const CheckOutTable: React.FC = () => {
    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-0 m-0 '>
                    <Table responsive>
                        <thead className='text-center'>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                            <th> </th>
                        </tr>
                        </thead>
                        <tbody>
                        <CheckOutItem/>
                        <CheckOutItem/>
                        {/*<EmptyCheckout/>*/}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
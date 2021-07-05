import React, {FC} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import EmptyImg from "../../../assets/images/empty_cart.png";
import CheckOutItem from "./CheckOutItem";

const EmptyCheckout: FC  = () => {
    return (
    <Row className='checkout-table m-0 p-0'>
        <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-3 m-0 text-center'>
                    <Image src={EmptyImg} className='empty-image'/>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    );
};

export default EmptyCheckout;
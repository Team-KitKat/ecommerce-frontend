import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Item from '../../../assets/images/edcoco.jpg'

const CartItem: React.FC = () => {
    return (
        <li>

            <Row className='cart-item p-1'>

                <Col xs={4}>
                    <Image src={Item} alt='Item Image' className='item-image'/>
                </Col>
                <Col xs={8}>

                    <Row className=''>
                        <Col xs={6}>
                            <label>Leaf</label>
                        </Col>
                        <Col xs={6}>
                            <i className='feather-trash-2 float-right text-danger'/>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs={6}>
                            <label className='text-secondary'>Qty: 1</label>
                        </Col>
                        <Col xs={6}>
                            <label className='text-success'>Rs: 260</label>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </li>
    );
};

export default CartItem;
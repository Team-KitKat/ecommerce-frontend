import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Item from '../../../assets/images/edcoco.jpg'

const CartItem: React.FC = () => {
    return (
        <li>
            <Row>
                <Col xs={4}>
                    <Image src={Item} alt='Item Image' className='item-image'/>
                </Col>
                <Col xs={8}>
                    <Row>
                        <Col xs={10}>

                        </Col>
                        <Col xs={2}>
                            <i className='feather-trash-2'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                        </Col>
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </li>
    );
};

export default CartItem;
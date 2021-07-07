import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
const CartTotal: React.FC = () => {
    const products=useSelector((state:RootState)=>state.checkoutProducts.value);

    let totalPrice=0;
    let discount=0;
    products.forEach((item)=>{
        totalPrice+=item.qty* item.price
        discount+=item.discount*item.qty
    })

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
                <Col xs={6} className='text-right'>
                    <Row>
                        <Col>
                        <label className='text-danger font-weight-bold'>{totalPrice}</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label className='font-weight-bold'>{discount}</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='cart-net-total' xs={12} md={12} xl={12} lg={12}>
                <Col xs={6}>
                    <label>Total</label>
                </Col>
                <Col xs={6} className='text-right'>
                    <label className='text-danger font-weight-bold'>{totalPrice-discount}</label>
                </Col>
            </Row>
            </Col>
        </Container>
    );
};

export default CartTotal;
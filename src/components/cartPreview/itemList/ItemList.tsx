import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CartItem from "./CartItem";

const ItemList: React.FC = () => {
    return (
        <Container fluid={true} className='m-0 cart-product-list'>
            <Col xs={12}>
                <ul className='ml-0 pl-0 list-unstyled'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>

                </ul>
            </Col>
        </Container>
    );
};

export default ItemList;
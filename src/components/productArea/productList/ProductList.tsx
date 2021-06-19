import React from 'react';
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";

const ProductList: React.FC = () => {
    return (
        <Col xs={12}>
            <Container className='mb-5 product-list'>
                <Row className='list-title'>
                    <Col xs={12} className=''>
                        <h5>Grocery</h5>
                    </Col>
                </Row>
                <Row className='product-list-container'>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                </Row>

            </Container>
        </Col>
    );
};

export default ProductList;
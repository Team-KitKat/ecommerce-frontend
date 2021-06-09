import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";

const ProductList: React.FC = () => {
    return (
        <Row className='product-list mx-5'>
            <Col>
                <Product/>
            </Col>
        </Row>
    );
};

export default ProductList;
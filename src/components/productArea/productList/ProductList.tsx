import React from 'react';
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";

const ProductList: React.FC = () => {
    return (
            <Row className='px-5 mx-5 mb-5 product-list '>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Row>
    );
};

export default ProductList;
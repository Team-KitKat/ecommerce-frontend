import React from 'react';
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";
import {useSelector} from "react-redux";
import{RootState} from "../../../redux/store";
import {productState} from "../../../redux/productSlice";
import {IProduct} from "../../../types/MainTypes";
const ProductList: React.FC = () => {

    const products=useSelector((state:RootState)=>state.products.value);
    return (
        <Col xs={12}>
            <Container className='mb-5 product-list'>
                <Row className='list-title'>
                    <Col xs={12} className=''>
                        <h5>Grocery</h5>
                    </Col>
                </Row>
                <Row className='product-list-container'>
                    {
                        products.map((product:IProduct) => (
                                <Product productInfo={product}/>
                            ))
                    }
                </Row>

            </Container>
        </Col>
    );
};

export default ProductList;
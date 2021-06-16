import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import AllImg from "../../../assets/images/categories/all.jpg";
import Grocery from "../../../assets/images/categories/grocery.png";
import Pharmacy from "../../../assets/images/categories/health.png";
import Food from "../../../assets/images/categories/food.png";
import Electronic from "../../../assets/images/categories/electro.png";

const ProductCategory: React.FC = () => {
    return (
        <Container className='category-container text-center'>
            <h2 className='mb-4'>Our Products</h2>
            <Row className='mx-1 category-list'>
            <Col className='m-2 p-2 category-item text-center'>
              <Image className='category-image' src={AllImg}/>
                <h6 className='py-2'>All</h6>
            </Col>
            <Col className='m-2 p-2 category-item text-center'>
                <Image className='category-image' src={Grocery}/>
                <h6 className='py-2'>Grocery</h6>
            </Col>
            <Col className='m-2 p-2 category-item text-center'>
                <Image className='category-image' src={Pharmacy}/>
                <h6 className='py-2'>Pharmacy</h6>
            </Col>

            <Col className='m-2 p-2 category-item text-center'>
                <Image className='category-image' src={Food}/>
                <h6 className='py-2'>Food</h6>
            </Col>
            <Col className='m-2 p-2 category-item text-center'>
                <Image className='category-image' src={Electronic}/>
                <h6 className='py-2'>Electronic</h6>
            </Col>
            </Row>
        </Container>
    );
};

export default ProductCategory;
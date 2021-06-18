import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import AllImg from "../../../assets/images/categories/all.jpg";
import Grocery from "../../../assets/images/categories/grocery.png";
import Pharmacy from "../../../assets/images/categories/health.png";
import Food from "../../../assets/images/categories/food.png";
import Electronic from "../../../assets/images/categories/electro.png";

const ProductCategory: React.FC = () => {
    return (
        <Col xs={12}>
        <Container className='category-container text-center'>
            <h2 className='mb-4'>Our Products</h2>
            <Row className='mx-1 category-list'>
            <Col className='m-0 m-xl-2 m-lg-2 m-md-2 m-sm-1 p-2 category-item text-center'>
              <Image className='category-image' src={AllImg}/>
                <p  className='pt-3'>All</p>
            </Col>
            <Col className='m-0 m-xl-2 m-lg-2 m-md-2 m-sm-1 p-2 category-item text-center'>
                <Image className='category-image' src={Grocery}/>
                <p className='pt-4'>Grocery</p>
            </Col>
            <Col className='m-0 m-xl-2 m-lg-2 m-md-2 m-sm-1 p-2 category-item text-center'>
                <Image className='category-image' src={Pharmacy}/>
                <p className='pt-4'>Pharmacy</p>
            </Col>

            <Col className='m-0 m-xl-2 m-lg-2 m-md-2 m-sm-1 p-2 category-item text-center'>
                <Image className='category-image' src={Food}/>
                <p className='pt-4'>Food</p>
            </Col>
            <Col className='m-0 m-xl-2 m-lg-2 m-md-2 m-sm-1 p-2 category-item text-center'>
                <Image className='category-image' src={Electronic}/>
                <p className='pt-4'>Electronic</p>
            </Col>
            </Row>
        </Container>
        </Col>
    );
};

export default ProductCategory;
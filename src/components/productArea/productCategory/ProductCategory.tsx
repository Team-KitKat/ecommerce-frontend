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
            <h2 className='mb-4'>Demo Products</h2>
            <Row className='m-0 px-0 category-list'>
            <Col className='m-0 mr-xl-4 mr-lg-4 mr-md-4 mr-sm-1 my-xl-4 my-lg-4 my-md-4 my-sm-1 p-2 category-item text-center'>
              <Image className='category-image pt-2' src={AllImg}/>
                <p  className='pt-2'>All</p>
            </Col>
            <Col className='m-0 mr-xl-4 mr-lg-4 mr-md-4 mr-sm-1 my-xl-4 my-lg-4 my-md-4 my-sm-1 p-2 category-item text-center'>
                <Image className='category-image pt-2' src={Grocery}/>
                <p className='pt-3'>Grocery</p>
            </Col>
            <Col className='m-0 mr-xl-4 mr-lg-4 mr-md-4 mr-sm-1 my-xl-4 my-lg-4 my-md-4 my-sm-1 p-2 category-item text-center'>
                <Image className='category-image pt-2' src={Pharmacy}/>
                <p className='pt-3'>Pharmacy</p>
            </Col>

            <Col className='m-0 mr-xl-4 mr-lg-4 mr-md-4 mr-sm-1 my-xl-4 my-lg-4 my-md-4 my-sm-1 p-2 category-item text-center'>
                <Image className='category-image pt-2' src={Food}/>
                <p className='pt-3'>Food</p>
            </Col>
            <Col className='m-0  my-xl-4 my-lg-4 my-md-4 my-sm-1 p-2 category-item text-center'>
                <Image className='category-image pt-2' src={Electronic}/>
                <p className='pt-3'>Electronic</p>
            </Col>
            </Row>
        </Container>
        </Col>
    );
};

export default ProductCategory;
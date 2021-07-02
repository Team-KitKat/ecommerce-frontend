import React from 'react';
import {Button, Card, Col, Form, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import ProductImg from "../../../assets/images/avacado.jpg";
import {IProduct} from "../../../types/MainTypes";

type productProps={
    productInfo:IProduct;
}
const Product: React.FC<productProps> = (props) => {
    const {productInfo}=props;
    const imgUrl=require('../../../assets/images/'+productInfo.image)
    console.log(productInfo.image);
    return (
        <Col xs={6} sm={6} lg={3} md={4} xl={3} className='m-0 px-xl-3 px-sm-3 px-lg-3 px-md-3 single-product'>
            <Row className={'px-1 py-0  m-0 mb-3 text-center product-body'}>
                <Col xs={12} className='p-0 m-0'>
                    <Image
                        className='m-0 px-0 px-lg-4 px-xl-5 px-md-3 px-sm-2  product-image'
                        src= {imgUrl.default} alt="product"/>
                </Col>
                <Col xs={12} className='mt-3 mb-3 mb-lg-4 mb-xl-4 mb-md-4 mb-sm-4 p-0 text-center'>
                    <h5 className={'ml-2 pb-2'}>{productInfo.name}</h5>
                </Col>
                <Col xs={12} className='mt-3 mt-sm-4 p-0 mb-0'>
                    <Row className=''>
                        <Col xs={5} className={'price-tag text-secondary'}>
                            <label><s>{productInfo.price}</s></label>
                        </Col>
                        <Col xs={7} className={'pl-0 pl-sm-5 pl-xl-5 pl-md-5 pl-lg-5 price-tag text-success'}>
                            <label className=''><b>{productInfo.discount}</b></label>
                        </Col>
                    </Row>
                    <Form className='add-product-form'>
                        <Row className='add-product mt-2'>
                            <Col xs={12} md={4} xl={4} lg={4} sm={12}  className={'number-input'}>
                                <Form.Group>
                                    <FormControl type='number' min={1} placeholder='1' className='product-qty'/>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={8} xl={8} lg={8} sm={12} className={'px-md-3 px-lg-3 px-xl-3 pb-2 pb-xl-0 pb-lg-0 pb-md-0'}>
                                <Button className='' variant="success">Add to Cart</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
};

export default Product;
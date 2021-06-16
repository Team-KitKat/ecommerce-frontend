import React from 'react';
import {Button, Card, Col, Form, FormControl, FormGroup, Image, Row} from "react-bootstrap";
import ProductImg from "../../../assets/images/avacado.jpg";

const Product: React.FC = () => {
    return (
        <Col xs={6} sm={6} lg={3} md={4} xl={3} className='m-0  px-5 single-product'>
            <Row className={'p-0 m-0 mb-5 text-center product-body'}>
                <Col xs={12} className='p-0 m-0'>
                <Image className='ml-2 px-5  product-image' src={ProductImg}/>
                </Col>
                    <Col xs={12} className='m-0 p-0 text-center'>
                        <h5 className={'ml-2 pb-2'}>Product</h5>
                    </Col>
                <Col xs={12}>
                    <Row className=''>
                        <Col xs={5} className={'price-tag text-secondary'}>
                            <label>65.00</label>
                        </Col>
                        <Col xs={7} className={'price-tag text-success float-right'}>
                            <label>RS.60.00</label>
                        </Col>
                    </Row>
                        <Form className='add-product-form'>
                            <Row className='add-product'>
                                <Col xs={4} className={'number-input'}>
                                    <Form.Group>
                                        <FormControl type='number' placeholder='1' className='product-qty'/>
                                    </Form.Group>
                                </Col>
                                <Col xs={8} className={''}>
                                    <Button variant="success">Add to Cart</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
            </Row>
        </Col>
    );
};

export default Product;
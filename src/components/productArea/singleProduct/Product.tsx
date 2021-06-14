import React from 'react';
import {Button, Card, Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import ProductImg from "../../../assets/images/leavesLogo.png";

const Product: React.FC = () => {
    return (
        <Col xs={6} sm={6} lg={3} md={4} xl={3} className='mx-xl-0 mx-lg-0 mx-sm-2 mx-2 px-2 '>
            <Card style={{width: '18rem', borderRadius: 10}} border={'secondary'}
                  className={'m-1 pt-5 px-4 mb-5 align-items-center single-product'}>
                <Card.Img className='product-image' style={{width: '12rem'}} variant="top" src={ProductImg}/>
                <Card.Body className={'text-right'}>
                    <Card.Title className={'text-center pb-2'}>Product Name</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col xs={6} className={'text-left text-success px-0'}>
                                RS. 65.00
                            </Col>
                            <Col xs={6} className={'text-secondary px-0'}>
                                RS. 75.00
                            </Col>
                        </Row>
                        <Row>
                            <Form className='add-product-form'>
                                <Row className='add-product'>
                                <Col xs={4} className={'number-input px-0'}>
                                    <Form.Group>
                                        <FormControl type='number' placeholder='1' className='product-qty'/>
                                    </Form.Group>
                                </Col>
                                <Col xs={8} className={'px-0'}>
                                    <Button variant="success">Add to Cart</Button>
                                </Col>
                                </Row>
                            </Form>

                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
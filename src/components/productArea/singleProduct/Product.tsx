import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import ProductImg from "../../../assets/images/products/mango.jpeg";

const Product: React.FC = () => {
  return (
    <Card style={{width: '18rem', borderRadius: 10}} border={'secondary'}
          className={'m-1 pt-5 px-4 mb-5 align-items-center single-product'}>
      <Card.Img style={{width: '12rem'}} variant="top" src={ProductImg}/>
      <Card.Body className={'text-right'}>
        <Card.Title className={'text-center pb-2'}>Product Name</Card.Title>
        <Card.Text>
          <Row>
            <Col xs={8} className={'text-left px-0'}>
              RS. 65.00
            </Col>
            <Col xs={4} className={'text-right px-0'}>
              RS. 65.00afa
            </Col>
          </Row>
          <Row>
            <Col xs={6} className={'text-left px-0'}>
              RS. 65.00
            </Col>
            <Col xs={6} className={'text-right px-0'}>
              <Button variant="primary">Add to Cart</Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
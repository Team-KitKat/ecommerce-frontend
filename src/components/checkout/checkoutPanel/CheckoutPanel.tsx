import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import CheckOutForm from "../PurchaseForm/CheckOutForm";
import CheckOutTable from "../checkOutTable/CheckOutTable";
import {IProduct} from "../../../types/MainTypes";

const CheckoutPanel: React.FC = () => {

    const generatedProductList: any[] = [
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        },
        {
            id: "1",
            image: '../../../assets/images/onions.jpg',
            name: "Onions",
            qty: 2,
            unitPrice: 120,
            amount: 240,
        }
    ];


    return (

            <Container className='checkout-info py-5 px-0'>
                <Row className='mx-0 my-3 p-0 checkout-title'>
                <Col xs={6} className='p-0 m-0'>
                    <h5>Checkout Page</h5>
                </Col>
                <Col xs={6} className='p-0 m-0'>
                    <Button type='button' variant='light' className='btn-shopping float-right'>Continue Shopping</Button>
                </Col>
                </Row>
                <Row className='p-0 m-0'>
                <Col xs={12} className="p-0 px-0 m-0 ">
                    <CheckOutTable products={generatedProductList}/>
                </Col>
                </Row>
                <Row className='p-0 m-0'>
                <Col className="py-5 text-center" md={5} xs={12}>
                    <h3>discount banner</h3>
                </Col>
                <CheckOutForm/>
                </Row>
            </Container>
    );
};

export default CheckoutPanel;
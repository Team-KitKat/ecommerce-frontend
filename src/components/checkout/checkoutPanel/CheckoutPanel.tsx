import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import CheckOutForm from "../PurchaseForm/CheckOutForm";
import CheckOutTable from "../checkOutTable/CheckOutTable";
import {IProduct} from "../../../types/MainTypes";
import Item from '../../../assets/images/onions.png';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import EmptyCheckout from "../checkOutTable/EmptyCheckout";
const CheckoutPanel: React.FC = () => {

    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const [showItemCart, setShowItemCart] = useState(false);
    const checkoutProducts=useSelector((state:RootState)=>state.checkoutProducts.value);

    useEffect( () => {
        if(checkoutProducts.length !== 0) {
            setShowItemCart(!showItemCart);

        }
        else {
            setShowEmptyCart(!showEmptyCart);

        }
    },[checkoutProducts]);


    const generatedProductList: IProduct[] = [
        {
            id: "1",
            image: "https://store-images-soft.s3.us-east-2.amazonaws.com/onions.jpg",
            name: "Onions",
            category: "grocery",
            qty: 2,
            price: 120,
            discount: 20,
            total: 240,
        },

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
                    {showEmptyCart ? <EmptyCheckout/> : <CheckOutTable/>}
                    {/*{showItemCart && <CheckOutTable/>}*/}
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
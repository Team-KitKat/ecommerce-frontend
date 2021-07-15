import React from 'react';
import {Button, Card, Col, Image, Row, Table} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


const CheckOutTable: React.FC = () => {

    const products=useSelector((state:RootState)=>state.checkoutProducts.value);

    let totalPrice=0;
    let discount=0;
    products.forEach((item)=>{
        totalPrice+=item.qty* item.price
        discount+=item.discount*item.qty
    })

    let netTotal= totalPrice-discount;

    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-3 m-0 '>
                    <CheckOutItem/>
                    <Row>
                        <Col xs={6} className='text-left price-tag'>
                            <label>Delivery Charge</label>
                        </Col>
                        <Col xs={6} className='text-right text-secondary'>
                            <label>Rs.250.00</label>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} className='text-left price-tag'>
                            <label>Discount</label>
                        </Col>
                        <Col xs={6} className='text-right text-secondary'>
                            <label>Rs.{discount}.00</label>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} className='text-left price-tag'>
                            <label>Est.Total</label>
                        </Col>
                        <Col xs={6} className='text-right text-danger net-total'>
                            <label>Rs.{netTotal}.00</label>
                        </Col>
                    </Row>
                </Card.Body>

            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
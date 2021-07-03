import React from 'react';
import {Button, Card, Col, Image, Row, Table} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import EmptyCheckout from "./EmptyCheckout";
import {IProduct} from "../../../types/MainTypes";
import Item from "../../../assets/images/onions.jpg";
import CheckoutPanel from "../checkoutPanel/CheckoutPanel";
import {inspect} from "util";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


const CheckOutTable: React.FC = () => {


    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-3 m-0 '>
                    <CheckOutItem/>
                </Card.Body>

            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
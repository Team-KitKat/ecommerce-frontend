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


type CheckoutTableProps = {
    products: IProduct[] ;
}

const CheckOutTable: React.FC<CheckoutTableProps> = (props) => {

    const {products} = props;


    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-3 m-0 '>

                    {/*<BootstrapTable*/}
                    {/*    classes='table'*/}
                    {/*    bootstrap4*/}
                    {/*    keyField="id"*/}
                    {/*    data={productsGenerator(products)}*/}
                    {/*    columns={ columns }*/}
                    {/*    pagination={paginationFactory(options)}*/}
                    {/*    wrapperClasses='table-responsive overflow-x'*/}
                    {/*    defaultSortDirection="asc"*/}
                    {/*    rowClasses='text-wrap'*/}
                    {/*    headerClasses='header-class'*/}

                    {/*/>*/}
                    <CheckOutItem products={products}/>
                </Card.Body>

            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
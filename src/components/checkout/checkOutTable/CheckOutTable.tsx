import React from 'react';
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import EmptyCheckout from "./EmptyCheckout";
import {IProduct} from "../../../types/MainTypes";

type CheckoutTableProps = {
    products: IProduct[] | null;
}

const CheckOutTable: React.FC<CheckoutTableProps> = (props) => {

    const {products} = props;

    const productsGenerator = () => {

        if(!products || products.length === 0) {
            return <EmptyCheckout/>;
        }
        return products.map((product: IProduct, index: number) =>
            <CheckOutItem key={index} num={index+1} product={product}/>
        );
    };


    const columns = [{
        dataField: 'id',
        text: '#',
        sort: true
    }, {
        dataField: 'image',
        text: 'Item',
        sort: true
    }, {
        dataField: 'name',
        text: 'Name',
        sort: true
    }, {
        dataField: 'qty',
        text: 'Qty',
        sort: true
    }, {
        dataField: 'unitPrice',
        text: 'Unit Price',
        sort: true
    }, {
        dataField: 'amount',
        text: 'amount',
        sort: true
    }, {
        dataField: 'del',
        text: ' ',
    }];

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    // @ts-ignore
    // @ts-ignore
    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-0 m-0 '>
                    {/*<Table responsive>*/}
                    {/*    <thead className='text-center'>*/}
                    {/*    <tr>*/}
                    {/*        <th>#</th>*/}
                    {/*        <th>Item</th>*/}
                    {/*        <th>Name</th>*/}
                    {/*        <th>Qty</th>*/}
                    {/*        <th>Unit Price</th>*/}
                    {/*        <th>Amount</th>*/}
                    {/*        <th> </th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    <CheckOutItem/>*/}
                    {/*    <CheckOutItem/>*/}
                    {/*    /!*<EmptyCheckout/>*!/*/}
                    {/*    </tbody>*/}
                    {/*</Table>*/}
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={productsGenerator()}
                        columns={ columns }
                        pagination={paginationFactory({ sizePerPage: 5 })}
                     >
                        {productsGenerator()}
                    </BootstrapTable>
                </Card.Body>
            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
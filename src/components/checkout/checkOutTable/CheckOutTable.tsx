import React from 'react';
import {Button, Card, Col, Image, Row, Table} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import EmptyCheckout from "./EmptyCheckout";
import {IProduct} from "../../../types/MainTypes";
import Item from "../../../assets/images/onions.jpg";
import DiscountTab from "./DiscountTab";

type CheckoutTableProps = {
    products: IProduct[] ;
}

const CheckOutTable: React.FC<CheckoutTableProps> = (props) => {

    const {products} = props;

    const productsGenerator = (products: IProduct[]) => {
        const generatedProductList: any[] = [];

        if(!products || products.length === 0) {
            return  generatedProductList;
        }
        return products.map((product: IProduct, index: number) =>
            // <CheckOutItem key={index} num={index+1} product={product}/>
            generatedProductList.push({
                id: index+1,
                image:<React.Fragment>
                    <Image src={product.image}/>
                </React.Fragment>,
                name: product.name,
                qty: product.qty,
                unitPrice: <React.Fragment>{"Rs."+product.price}</React.Fragment>,
                amount: <React.Fragment>{"Rs."+product.total}</React.Fragment>,
                del: <React.Fragment><i className='feather-trash text-secondary'/></React.Fragment>

            })
        );
        return generatedProductList;
    };

    const customTotal = (from: number, to: number, size: number) => (
        <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
    );

    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: products.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };

    const columns = [{
        dataField: 'id',
        text: '#',

    }, {
        dataField: 'image',
        text: 'Item',


    }, {
        dataField: 'name',
        text: 'Name',

    }, {
        dataField: 'qty',
        text: 'Qty',

    }, {
        dataField: 'unitPrice',
        text: 'Unit Price',

    }, {
        dataField: 'amount',
        text: 'amount',

    }, {
        dataField: 'del',
        text: ' ',

    }];

    // const defaultSorted = [{
    //     dataField: 'id',
    //     order: 'asc'
    // }];

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
                        keyField="id"
                        data={productsGenerator(products)}
                        columns={ columns }
                        pagination={paginationFactory(options)}
                        wrapperClasses='table-responsive'
                     />

                </Card.Body>
            </Card>
                    <DiscountTab/>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
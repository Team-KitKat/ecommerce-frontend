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

type CheckoutTableProps = {
    products: IProduct[] ;
}

const CheckOutTable: React.FC<CheckoutTableProps> = (props) => {

    const {products} = props;

    const columns = [{
        dataField: 'id',
        text: '#',
        sort: true,
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',

        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',

            }
        }

    }, {
        dataField: 'image',
        text: 'Item',
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }

    }, {
        dataField: 'name',
        text: 'Name',
        sort: true,
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }
    }, {
        dataField: 'qty',
        text: 'Qty',
        sort: true,
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }
    }, {
        dataField: 'unitPrice',
        text: 'Unit Price',
        sort: true,
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }

    }, {
        dataField: 'amount',
        text: 'amount',
        sort: true,
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }

    }, {
        dataField: 'del',
        text: ' ',
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }

    }];

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc',
        headerStyle: {
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px',
            borderTop: 'none',
        },
        style: () => {
            return {
                borderLeft: 'none',
                borderRight: 'none',
                borderBottom: '1px',
            }
        }
    }];



    const productsGenerator = (products: IProduct[]): any[] => {
        const generatedProductList: any[] = [];

        products.forEach((product: IProduct, index: number) =>
            // <CheckOutItem key={index} num={index+1} product={product}/>
            generatedProductList.push({
                id: <p className='text-center' key={index}>{index+1}</p>,
                image:<Row key={index}><Col className='px-0 text-center'> <Image src={Item} alt='product image' className='item-image'/></Col></Row>,
                name: <p key={index} className='text-center'>{product.name}</p>,
                qty: <p key={index} className='text-center'><i className='feather-minus-circle text-secondary'/> {product.qty} <i className='feather-plus-circle text-secondary'/></p>,
                unitPrice: <p key={index} className='text-center'>{"Rs."+product.price}</p>,
                amount: <p key={index} className='text-center'>{"Rs."+product.total}</p>,
                del: <p key={index} className='text-center'><i className='feather-trash text-secondary'/></p>

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
        pageStartIndex: 1,
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



    // const defaultSorted = [{
    //     dataField: 'id',
    //     order: 'asc'
    // }];

    return (
        <Row className='checkout-table m-0 p-0'>
                <Col xs={12} className='m-0 p-0'>
            <Card className='cart-table'>
                <h6 className='p-2'>Shopping Cart</h6>
                <Card.Body className='card-body p-3 m-0 '>
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
                        classes='table'
                        bootstrap4
                        keyField="id"
                        data={productsGenerator(products)}
                        columns={ columns }
                        pagination={paginationFactory(options)}
                        wrapperClasses='table-responsive overflow-x'
                        defaultSortDirection="asc"
                        rowClasses='text-wrap'
                        headerClasses='header-className'

                    />

                </Card.Body>

            </Card>
                </Col>
        </Row>
    );
};

export default CheckOutTable;
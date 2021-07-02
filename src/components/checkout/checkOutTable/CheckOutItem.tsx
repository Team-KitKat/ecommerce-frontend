import React from 'react';
import Item from '../../../assets/images/onions.png';
import {Col, Image, Row} from "react-bootstrap";
import {IProduct} from "../../../types/MainTypes";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

type CheckoutItemProps = {
    products: IProduct[];
}

const CheckOutItem: React.FC<CheckoutItemProps> = (props) => {

    const {products} = props;

    const columns = [{
        dataField: 'id',
        text: '#',
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
        headerAlign: 'center',
        align: 'center',
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
    }];



    const productsGenerator = (products: IProduct[]): any[] => {
        const generatedProductList: any[] = [];
        console.log(products[0].image);
        products.forEach((product: IProduct, index: number) => {
            // <CheckOutItem key={index} num={index+1} product={product}/>
            generatedProductList.push({
                id: <p className='text-center' key={index}>{index + 1}</p>,
                image: <Row key={index}><Col className='px-0 text-center'> <Image src={product.image}
                                                                                  alt='product image'
                                                                                  className='item-image'/></Col></Row>,
                name: <p key={index} className='text-center'>{product.name}</p>,
                qty: <p key={index} className='text-center'><i
                    className='feather-minus-circle text-secondary'/> {product.qty} <i
                    className='feather-plus-circle text-secondary'/></p>,
                unitPrice: <p key={index} className='text-center'>{"Rs." + product.price}</p>,
                amount: <p key={index} className='text-center'>{"Rs." + product.total}</p>,
                del: <p key={index} className='text-center'><i className='feather-trash text-secondary'/></p>

            })
        }  );
        return generatedProductList;
    };

    const customTotal = (from: number, to: number, size: number) => (
        <span className="react-bootstrap-table-pagination-total text-secondary">
    Showing { from } to { to } of { size } Results
  </span>
    );


    const options = {
        classes: 'pagination',
        paginationSize: 4,
        pageStartIndex: 1,
        color: '#4caf50',
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


    return (
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
            headerClasses='header-class'

        />
    );
};

export default CheckOutItem;
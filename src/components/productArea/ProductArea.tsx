import React from 'react';
import {Container, Row} from "react-bootstrap";
import SearchBar from "./searchBar/SearchBar";
import ProductCategory from "./productCategory/ProductCategory";
import ProductList from "./productList/ProductList";

const ProductArea: React.FC = () => {
    return (
        <Row className='product-area mx-0 mx-lg-0 mx-md-0 mx-xl-0 mx-sm-0' >
            <SearchBar/>
            <ProductCategory/>
            <ProductList/>
        </Row>
    );
};

export default ProductArea;
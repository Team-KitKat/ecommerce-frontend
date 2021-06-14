import React from 'react';
import {Container} from "react-bootstrap";
import SearchBar from "./searchBar/SearchBar";
import ProductCategory from "./productCategory/ProductCategory";
import ProductList from "./productList/ProductList";

const ProductArea: React.FC = () => {
    return (
        <Container className='product-area' fluid={true}>
            <SearchBar/>
            <ProductCategory/>
            <ProductList/>
        </Container>
    );
};

export default ProductArea;
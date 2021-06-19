import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import SearchBar from "./searchBar/SearchBar";
import ProductCategory from "./productCategory/ProductCategory";
import ProductList from "./productList/ProductList";

const ProductArea: React.FC = () => {

    const [isMessageVisible, setIsMessageVisible] = useState(true);

    const handleOnCloseClick = () => {
        setIsMessageVisible(false);
    }

    return (
        <Row className='product-area mx-0 mx-lg-0 mx-md-0 mx-xl-0 mx-sm-0' >
            <SearchBar/>
            {isMessageVisible && <Col xs={12}>
                <Container className='py-2 message-box'>
                <i className='message'><sup>*</sup>Products listed here are demo purpose only. They are not available for sale</i>
                    <Button type='button' className='close' onClick={handleOnCloseClick}><i className='feather-x'/></Button>
                </Container>
            </Col>}
            <ProductCategory/>
            <ProductList/>
        </Row>
    );
};

export default ProductArea;
import React, {useState} from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
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
            <Col xs={12} className={'mb-5'}>
                <SearchBar/>
            </Col>
            <Col xs={12}>
                {isMessageVisible && <Container className='message-box mt-4'>
                    <Alert variant='info' onClose={handleOnCloseClick} dismissible>
                        <i><sup>*</sup>Products listed here are demo purpose only. They are not available for sale</i>
                    </Alert>
                </Container>}
            </Col>
            <ProductCategory/>
            <ProductList/>
        </Row>
    );
};

export default ProductArea;
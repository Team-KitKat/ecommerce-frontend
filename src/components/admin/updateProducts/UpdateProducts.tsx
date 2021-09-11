import React from 'react';
import PageTitle from "../pageTitle/PageTitle";
import ProductForm from "../productForm/ProductForm";
import {Col, Container, Form, Row} from "react-bootstrap";
import Product from "../../productArea/singleProduct/Product";
import {IProduct} from "../../../types/MainTypes";
import Productpreview from "../productPreview/Productpreview";

const productPreview:IProduct={
    id: 1,
    image:"https://imageuploadstore.s3.amazonaws.com/carrot.jpg",
    name: "Carrot",
    category:"Vegitbles",
    qty: 0,
    price: 230,
    discount: 24,
    total: 0
}
const index:number=100;
const UpdateProducts: React.FC = () => {
    return (
        <Container fluid={true}>
            <PageTitle title={"Update Product "} subTitle={"48 products"}/>
            <Row>
                <Col xs={12} md={9}>
                    <ProductForm ProductToUpdate={true}/>
                </Col>
                <Col xs={12} md={3}>
                    <Productpreview productInfo={productPreview}/>
                    {/*<Product productInfo={productPreview} index={index}/>*/}
                </Col>
            </Row>
        </Container>

    );
};

export default UpdateProducts;
import React from 'react';
import PageTitle from "../pageTitle/PageTitle";
import ProductForm from "../productForm/ProductForm";

const AddProducts: React.FC = () => {
    return (
        <React.Fragment>
            <PageTitle title={"Add Product "} subTitle={"48 products"}/>
            <ProductForm/>
        </React.Fragment>
    );
};

export default AddProducts;
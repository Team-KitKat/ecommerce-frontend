import React from 'react';
import PageTitle from "../pageTitle/PageTitle";
import {Row} from "react-bootstrap";

const ViewProducts: React.FC = () => {
    return (
        <Row className="admin-view-products">
            <PageTitle title={"View Product "} subTitle={"48 products"}/>

        </Row>

    );
};

export default ViewProducts;
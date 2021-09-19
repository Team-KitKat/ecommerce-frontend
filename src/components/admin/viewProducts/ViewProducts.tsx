import React from 'react';
import PageTitle from "../pageTitle/PageTitle";
import {Col, Row} from "react-bootstrap";
import ViewProductTable from "./ViewProductTable";

const ViewProducts: React.FC = () => {
    return (
        <Row className="admin-view-products m-0 p-0" >
            <PageTitle title={"View Product "} subTitle={"48 products"} />
            <Col xs={12} sm={12} md={12} lg={11} xl={11} className="m-auto py-3 m-0 p-0 ">
                <ViewProductTable/>
            </Col>
        </Row>

    );
};

export default ViewProducts;
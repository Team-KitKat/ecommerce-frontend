import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideNavBar from "../../components/admin/sideNavBar/SIdeNavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ViewProducts from "../../components/admin/viewProducts/ViewProducts";
import UpdateProducts from "../../components/admin/updateProducts/UpdateProducts";
import AddProducts from "../../components/admin/addProducts/AddProducts";
import AdminHeader from "../../components/admin/header/AdminHeader";

const AdminHome: React.FC = () => {
    return (
            <Container fluid={true} className="admin-layout">

                <Row className="admin-container">
                    <SideNavBar/>
                    <Col className=" p-0 m-0 content-container ">
                        <AdminHeader/>
                        <Switch>
                            <Route exact path="/dashboard/add-product">
                                <AddProducts/>
                            </Route>
                            <Route path="/dashboard/view-product">
                                <ViewProducts/>
                            </Route>
                            <Route path="/dashboard/update-product">
                                <UpdateProducts/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
    );
};

export default AdminHome;
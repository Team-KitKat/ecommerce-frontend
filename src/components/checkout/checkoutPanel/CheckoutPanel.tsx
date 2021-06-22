import React from 'react';
import {Col,Row} from "react-bootstrap";
import Welcome from "../../welcomeImage/Welcome";
import CheckOutForm from "../PurchaseForm/CheckOutForm";

const CheckoutPanel: React.FC = () => {
    return (
        <div className="Container">
            <Row className='checkout-info'>
                <Col md ={5} xs={12}>
                    <h3>discount banner</h3>
                </Col>
                <CheckOutForm/>
            </Row>
        </div>
    );
};

export default CheckoutPanel;
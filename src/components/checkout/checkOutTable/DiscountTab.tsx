import React, {ChangeEvent, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const DiscountTab=()=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
        if (form===""||null) {
            return
        }

        setValidated(true);
    };

    return (
        <Form className="discount-tab-form px-0 mx-0" noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group className="discount-tab" as={Row} controlId="validationCustom01">
                    <Col className="discount-code-label px-0 mx-0 pt-2 mx-0 text-center" sm={4}>
                        <p>Have Discount Code?</p>
                    </Col>
                    <Col className="px-0 mx-0" sm={5}>
                    <Form.Control
                        required
                        type="text"
                        placeholder=""
                        defaultValue=""
                    />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please provide a coupon code.</Form.Control.Feedback>
                    </Col>
                    <Col className="px-0 ml-1 mx-0 mt-1" sm={2}>
                        <Button type="submit" variant="success" size="sm">
                            Apply
                        </Button>
                    </Col>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
export default DiscountTab;
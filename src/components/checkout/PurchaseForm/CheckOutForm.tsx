import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Flag from "../../../assets/images/FlagIcon/sri-lanka-flag.png";
import Credit from "../../../assets/images/PaymentMethods/icons8-credit-card-50.png";
import Money from "../../../assets/images/PaymentMethods/icons8-money-48.png";
const CheckOutForm: React.FC = () => {
    const [visibility, setVisibility] = useState(false);

    return (
        <Col md={5} xs={12}>
            <Container className="checkout-form-container">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            Already have an account? <Button variant="primary" className=" pt-0 pb-0
                                pl-lg-5 pr-lg-5 float-right"><h5>Sign in</h5></Button>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card className="shipping-info-card mt-2">
                    <Card.Header className="shipping-info-card-header" style={{backgroundColor: 'white'}} as="h5">
                        Shipping and Billing Address</Card.Header>
                    <Form className="mx-4 my-4">
                        <Form.Row>
                            <Form.Group as={Col} xs="12" className="my-1" controlId="formName">
                                <Form.Label>Full Name*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Your Full Name" className="input-sm"/>
                            </Form.Group>

                            <Form.Group as={Col} xs="12" className="my-1" controlId="formAddress">
                                <Form.Label>Address*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Street Address"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCity/SubUrb">
                                <Form.Label>City/SubUrb*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="City/SubUrb"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formPostalCode">
                                <Form.Label>Postal Code*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Postal Code"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCountry">
                                <Form.Label>Country*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Country"/>
                            </Form.Group>
                            <Form.Group as={Col} xs="12" className="my-1" controlId="formCountry">
                                <Form.Label>Contact Number*</Form.Label>
                                <InputGroup className=" input-group-sm my-1">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"> <img alt="Sri-Lankan-Flag" src={Flag}/>
                                            +94</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        size="sm"
                                        placeholder=""
                                        aria-label=""
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="mb-2">
                            <Form.Group as={Col} md="6" className="mb-3" controlId="Email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Email"/>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="Retype Email*">
                                <Form.Label>Retype Email*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Retype Email"/>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="retype-email mb-3" controlId="Retype Email*">
                                <Form.Label>Choose your password*</Form.Label>
                                <InputGroup className="my-1">
                                    <FormControl
                                        size="sm"
                                        placeholder=""
                                        type= {visibility ? 'text' : 'password'}
                                        aria-label=""
                                        aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"> <i
                                            className={visibility ? 'feather-eye' : 'feather-eye-off'}
                                            onClick={() => setVisibility(visibility => !visibility)}/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <i data-feather="eye"/>
                    </Form>
                </Card>
                <Row className="mt-4">
                    <Col xs={12}>
                        <p>Change Shipping Address</p>
                    </Col>
                    <Col xs={12}>
                        <Form>
                            <Form.Check name="radioBtn" label="Same as user address" type="radio" inline/>
                            <Form.Check name="radioBtn" label="Change shipping address" type="radio" inline/>
                            <Form.Row className="mt-4">
                                <p>Add Delivery Instructions (Optional)</p>
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                />
                            </Form.Row>
                            <Form.Row className="payment-methods mt-4">
                                <Col xs={12}>
                                    <h5>Payment Methods</h5>
                                </Col>
                                <Col xs={5} className=" Credit mx-0 text-center">
                                    <img alt="Credit" src={Credit}/>
                                </Col>
                                <Col xs={2}></Col>
                                <Col xs={5} className=" Money mx-0 text-center">
                                    <img alt="Money" src={Money}/>
                                </Col>
                            </Form.Row>
                            <Form.Row className="mb-4">
                                <Col xs={12} className="mx-0 text-center">
                                    <Button variant="primary" className="mt-3 pt-0 pb-0
                                            pl-lg-5 pr-lg-5">
                                        <h5>Order</h5></Button>
                                </Col>
                            </Form.Row>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default CheckOutForm;
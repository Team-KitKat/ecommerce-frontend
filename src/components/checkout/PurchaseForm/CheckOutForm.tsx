import React, {ChangeEvent, useState, useRef, useEffect} from 'react';
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Flag from "../../../assets/images/FlagIcon/sri-lanka-flag.png";
import Credit from "../../../assets/images/PaymentMethods/icons8-credit-card-50.png";
import Money from "../../../assets/images/PaymentMethods/icons8-money-48.png";
import passwordStrengthChecker from "./PasswordStrengthChecker";
import NewAddressForm from "./NewAddressForm";

const CheckOutForm: React.FC = () => {
    const [visibility, setVisibility] = useState(false);
    const [newFormVisisbilty,setnewFormVisisbilty] = useState(false);
    const[formStatus,setFormStatus]=useState("")
    const [password,setPassword]=useState("");

    const passwordBar1=useRef<HTMLParagraphElement>(null);
    const passwordBar2=useRef<HTMLParagraphElement>(null);
    const passwordBar3=useRef<HTMLParagraphElement>(null);
    const passwordBar4=useRef<HTMLParagraphElement>(null);
    const passwordBar5=useRef<HTMLParagraphElement>(null);
    const passwordBar6=useRef<HTMLParagraphElement>(null);

    const passwordHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        passwordStrengthChecker(password,passwordBar1,passwordBar2,passwordBar3,passwordBar4,passwordBar5,passwordBar6);
    }
    const  radioHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setFormStatus(e.target.value);
    }

    useEffect(() => {
        if(formStatus==="new"){
            setnewFormVisisbilty(true);
        }
        else{
            setnewFormVisisbilty(false);
        }

    },[formStatus])

    useEffect(() => {
       if(password===""){
            if(passwordBar1 && passwordBar1.current){
                passwordBar1.current.style.borderColor='#9E9E9E';
                passwordBar1.current.style.backgroundColor='#9E9E9E';
            }
            if(passwordBar2 && passwordBar2.current){
                passwordBar2.current.style.borderColor='#9E9E9E';
                passwordBar2.current.style.backgroundColor='#9E9E9E';
            }
           if(passwordBar3 && passwordBar3.current){
               passwordBar3.current.style.borderColor='#9E9E9E';
               passwordBar3.current.style.backgroundColor='#9E9E9E';
           }
           if(passwordBar4 && passwordBar4.current){
               passwordBar4.current.style.borderColor='#9E9E9E';
               passwordBar4.current.style.backgroundColor='#9E9E9E';
           }
           if(passwordBar5 && passwordBar5.current){
               passwordBar5.current.style.borderColor='#9E9E9E';
               passwordBar5.current.style.backgroundColor='#9E9E9E';
           }
           if(passwordBar6 && passwordBar6.current){
               passwordBar6.current.style.borderColor='#9E9E9E';
               passwordBar6.current.style.backgroundColor='#9E9E9E';
           }
        }
    }, [password])

    return (
        <Col md={7} xs={12}>
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
                                <Form.Label className="my-0">Full Name*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Your Full Name" className="input-sm"/>
                            </Form.Group>

                            <Form.Group as={Col} xs="12" className="my-1" controlId="formAddress">
                                <Form.Label className="my-0">Address*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Street Address"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCity/SubUrb">
                                <Form.Label className="my-0">City/SubUrb*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="City/SubUrb"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formPostalCode">
                                <Form.Label className="my-0">Postal Code*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Postal Code"/>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCountry">
                                <Form.Label className="my-0">Country*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Country"/>
                            </Form.Group>
                            <Form.Group as={Col} xs="12" className="my-1" controlId="formCountry">
                                <Form.Label className="my-0">Contact Number*</Form.Label>
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
                                <Form.Label className="my-0">Email*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Email"/>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="Retype Email*">
                                <Form.Label className="my-0">Retype Email*</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Retype Email"/>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="retype-email mb-3" controlId="Retype Email*">
                                <Form.Label className="my-0">Choose your password*</Form.Label>
                                <InputGroup className="my-1">
                                    <FormControl
                                        size="sm"
                                        placeholder=""
                                        type={visibility ? 'text' : 'password'}
                                        onChange={passwordHandler}
                                        aria-label=""
                                        aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Prepend style={{backgroundColor: 'white', border: '0px'}}>
                                        <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'white'}}> <i
                                            className={visibility ? 'feather-eye' : 'feather-eye-off'}
                                            onClick={() => setVisibility(visibility => !visibility)}/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                                <Row className="mx-0 strength-lines">
                                    <p className="strength-bar" ref={passwordBar1} id="bar-1"/>
                                    <p className="strength-bar"  ref={passwordBar2}  id="bar-2" style={{}}/>
                                    <p className="strength-bar" ref={passwordBar3} id="bar-3"/>
                                    <p className="strength-bar" ref={passwordBar4} id="bar-4"/>
                                    <p className="strength-bar" ref={passwordBar5} id="bar-5"/>
                                    <p className="strength-bar" ref={passwordBar6} id="bar-6"/>
                                </Row>
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
                            <Form.Check name="radioBtn" value="same" label="Same as user address" onChange={radioHandler} type="radio" inline/>
                            <Form.Check name="radioBtn" value="new" label="Change shipping address"  onChange={radioHandler} type="radio" inline/>
                            {newFormVisisbilty?<NewAddressForm/>:<div/>}
                            <Form.Row className="mt-4">
                                <p>Add Delivery Instructions (Optional)</p>
                                <Form.Control
                                    as="textarea"
                                    style={{height: '100px'}}
                                />
                            </Form.Row>
                            <Form.Row className="payment-methods mt-4">
                                <Col xs={12}>
                                    <h5>Payment Methods</h5>
                                </Col>
                                <Col xs={5} className=" Credit mx-0 text-center">
                                    <img alt="Credit" src={Credit}/>
                                </Col>
                                <Col xs={2}/>
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
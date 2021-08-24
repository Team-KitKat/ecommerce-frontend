import React, {ChangeEvent, useState, useRef, useEffect} from 'react';
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Flag from "../../../assets/images/FlagIcon/sri-lanka-flag.png";
import Credit from "../../../assets/images/PaymentMethods/icons8-credit-card-100.png";
import Money from "../../../assets/images/PaymentMethods/icons8-money-96.png";
import NewAddressForm from "./NewAddressForm";
import passwordStrengthChecker from "./PasswordStrengthChecker";
import Select, {ValueType} from "react-select";

const CheckOutForm: React.FC = () => {
    const [visibility, setVisibility] = useState(false);
    const [newFormVisisbilty,setnewFormVisisbilty] = useState(false);
    const[formStatus,setFormStatus]=useState("")
    const [password,setPassword]=useState("");
    const[name,setName]=useState<string | null>("");
    const[address,setAddress]=useState<string | null>("");
    const[city,setCity]=useState<string | null>("");
    const[postalCode,setPostalCode]=useState<string | null>("");
    const [country,setCountry]=useState<string | null>("");
    const [email,setEmail]=useState<string | null>("");
    const [validated, setValidated] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const options = [
        { value: 'United States',label:'United States'},
        { value: 'Sri Lanka',label:'Sri Lanka' },
        { value: 'India',label:'India' },
        { value: 'Australia',label:'Australia' }
    ]

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        if ((name === "" || null)||(address === "" || null)||(city === "" || null)||(postalCode === "" || null)||
            (country === "" || null)||(email === "" || null)){
            return;
        }

    };

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



    const customStyles = {
        control: (base:any) => ({
            ...base,
            height: 32,
            minHeight: 25
        })

    };

    return (
        <Col md={7} xs={12} className='p-0 m-0 mt-3'>
            <Container className="checkout-form-container p-0 m-0">
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
                    <Form className="mx-4 my-4" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} xs="12" className="my-1" controlId="formName">
                                <Form.Label className="my-0">Full Name*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="input-sm"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} xs="12" className="my-1" controlId="formAddress">
                                <Form.Label className="my-0">Address*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Street Address"
                                    className="input-sm"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCity/SubUrb">
                                <Form.Label className="my-0">City/SubUrb*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="City/SubUrb"
                                    className="input-sm"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formPostalCode">
                                <Form.Label className="my-0">Postal Code*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Postal Code"
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="my-1" controlId="formCountry">
                                <Form.Label className="my-0">Country*</Form.Label>
                                    <Select
                                        className="country-select"
                                        defaultValue={options[1]}
                                        options={options}
                                        styles={customStyles}
                                        theme={theme => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: 'neutral0',
                                                primary: 'neutral0',
                                            }
                                            })
                                        }
                                    />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
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
                                        required
                                        aria-describedby="basic-addon1"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="mb-2">
                            <Form.Group as={Col} md="6" className="mb-3" controlId="Email">
                                <Form.Label className="my-0">Email*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    required
                                    placeholder="Email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="Retype Email*">
                                <Form.Label className="my-0">Retype Email*</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    required
                                    placeholder="Retype Email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="retype-email mb-3" controlId="Retype Email*">
                                <Form.Label className="my-0">Choose your password*</Form.Label>
                                <InputGroup className="my-1">
                                    <FormControl
                                        size="sm"
                                        placeholder=""
                                        required
                                        type={visibility ? 'text' : 'password'}
                                        onChange={passwordHandler}
                                        aria-label=""
                                        aria-describedby="basic-addon1"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                                    <InputGroup.Prepend style={{backgroundColor: 'white', border: '0px'}} >
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

                        <Row className="mt-4 mx-0">
                            <Col xs={12}>
                                <p>Change Shipping Address</p>
                            </Col>
                            <Col xs={12} className="px-0">
                                    <Form.Check name="radioBtn" value="same" label="Same as user address" onChange={radioHandler} type="radio" inline/>
                                    <Form.Check name="radioBtn" value="new" label="Change shipping address"  onChange={radioHandler} type="radio" inline/>
                                    {newFormVisisbilty?<NewAddressForm/>:<div/>}
                                    <Form.Row className="mt-4 mx-0">
                                        <p>Add Delivery Instructions (Optional)</p>
                                        <Form.Control
                                            as="textarea"
                                            style={{height: '100px'}}
                                            required
                                        />
                                    </Form.Row>
                                    <Row className="payment-methods mt-4 mx-0">
                                        <Col xs={12}>
                                            <h5>Payment Methods</h5>
                                        </Col>
                                        <Row className="mx-0 px-3"style={{width:'100%'}} >
                                            <Col md={5} xs={12} className=" Credit px-0 text-center">
                                                <img alt="Credit" src={Credit}/>
                                                <p>Credit/Debit Card</p>
                                            </Col>
                                            <Col md={{ span: 1, offset: 1}}/>
                                            <Col md={5} xs={12} className=" Money px-0 text-center">
                                                <img alt="Money" src={Money}/>
                                                <p>Cash On Delivery</p>
                                            </Col>
                                        </Row>

                                    </Row>
                                    <Form.Row className="order-btn mb-4 mx-0">
                                        <Col xs={12} className="mx-0 text-center">
                                            <Button variant="primary" type="submit" className=" mt-3 pt-2 pb-2
                                            pl-lg-5 pr-lg-5">
                                                <p style={{marginTop:'0',marginBottom:'0'}}>Order</p></Button>
                                        </Col>
                                    </Form.Row>
                            </Col>
                        </Row>
                    </Form>
                </Card>

            </Container>
        </Col>
    );
};

export default CheckOutForm;
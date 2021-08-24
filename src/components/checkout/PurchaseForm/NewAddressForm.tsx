import React from "react";
import {Col, Form, FormControl, InputGroup} from "react-bootstrap";
import Flag from "../../../assets/images/FlagIcon/sri-lanka-flag.png";

const NewAddressForm:React.FC=()=>{
    return(
            <Form.Row>
                <Form.Group as={Col} xs="12" className="my-1" controlId="formName">
                    <Form.Label className="my-0">Full Name*</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Your Full Name" required className="input-sm"/>
                </Form.Group>

                <Form.Group as={Col} xs="12" className="my-1" controlId="formAddress">
                    <Form.Label className="my-0">Address*</Form.Label>
                    <Form.Control size="sm" type="text" required placeholder="Street Address"/>
                </Form.Group>
                <Form.Group as={Col} md="4" className="my-1" controlId="formCity/SubUrb">
                    <Form.Label className="my-0">City/SubUrb*</Form.Label>
                    <Form.Control size="sm" type="text" required placeholder="City/SubUrb"/>
                </Form.Group>
                <Form.Group as={Col} md="4" className="my-1" controlId="formPostalCode">
                    <Form.Label className="my-0">Postal Code*</Form.Label>
                    <Form.Control size="sm" type="text" required placeholder="Postal Code"/>
                </Form.Group>
                <Form.Group as={Col} md="4" className="my-1" controlId="formCountry">
                    <Form.Label className="my-0">Country*</Form.Label>
                    <Form.Control size="sm" type="text" required placeholder="Country"/>
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
                            required
                        />
                    </InputGroup>
                </Form.Group>
            </Form.Row>
    )
}
export default NewAddressForm;
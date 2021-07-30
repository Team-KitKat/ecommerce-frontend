import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {Button, Col, FormControl, InputGroup, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Select, {ValueType} from 'react-select'
import {IFormGroup, IOption} from "../../../types/MainTypes";
import {useHistory} from "react-router-dom";

const options: IOption[] = [
    {value: 'grocery', label: 'Grocery'},
    {value: 'pharmacy', label: 'Pharmacy'},
    {value: 'food', label: 'Food'}
]

const ProductForm: React.FC = () => {

    const [validated, setValidated] = useState(false);
    const [selectorBorderColor, setSelectorBorderColor] = useState<string>('#cecece');

    const [isSelectorValidate, setIsSelectorValidate] = useState<boolean>(false);
    const [selectorValue, setSelectorValue] = useState<string | null>(null);

    const [productName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<string>("");
    const [productOfferPrice, setProductOfferPrice] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");
    const [productExpireData, setProductExpireData] = useState<string>("");
    const [productImage, setProductImage] = useState<string>("");


    const handleOnProductNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value);
    }

    const handleOnProductPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductPrice(e.target.value)
    }
    const handleOnProductOfferPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductOfferPrice(e.target.value)
    }
    const handleOnProductExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductExpireData(e.target.value)
    }
    const handleOnProductDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductDescription(e.target.value)
    }

    const handleOnProductTypeChange = (option: ValueType<IOption, false>) => {
        setSelectorValue(option ? option.value : null);
        if (option) {
            setSelectorBorderColor('#30b625');
        } else {
            setSelectorBorderColor('#f80046');
        }
    }

    const handleSubmit = (event: FormEvent) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        if (!selectorValue) {
            setSelectorBorderColor("#f80046")
        }
        if (productName == "" || selectorValue == "" || productPrice == "" || productOfferPrice == "" || productExpireData == "" || productDescription == "") {
            return;
        } else {
            history.push("/home")
        }

    };

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            border: `1px solid  ${selectorBorderColor}`,
            borderRadius: '5px',
            height: '25px',
            marginBottom: '15px',
            lineHeight: '30px',
            outline: 'none',
        }),
    }
    const history = useHistory();

    return (
        <Form  noValidate validated={validated} onSubmit={handleSubmit} className="pb-5">
            <Row className='product-form pt-5 m-0'>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleOnProductNameChange}
                            required
                        />
                        {<Form.Text className="text-danger ">
                            required
                        </Form.Text>}
                    </Form.Group>
                    <Form.Label> Product Type </Form.Label>
                    <Select
                        placeholder={""}
                        isSearchable
                        options={options}
                        isClearable
                        styles={customStyles}
                        onChange={handleOnProductTypeChange}
                    />
                    <Form.Label> Product Price </Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Rs</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number"
                                     onChange={handleOnProductPriceChange} required
                                     aria-label="Amount (to the nearest dollar)"/>
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Label> Offer Price </Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Rs</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number"
                                     onChange={handleOnProductOfferPriceChange} required
                                     aria-label="Amount (to the nearest dollar)"/>
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control
                            type="date"
                            onChange={handleOnProductExpireDateChange}
                            required
                        />
                        {<Form.Text className="text-danger ">
                            required
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={handleOnProductDescriptionChange} required
                                      as="textarea" rows={3}/>
                    </Form.Group>
                    <Button variant="primary" className="btn btn-primary" type="submit">
                        Add Product
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Row>
                        <Form.Group controlId="formFileLg" className="mb-3 m-auto p-3 ">
                            <Form.Label>Product Image Upload</Form.Label>
                            <Form.Control type="file" size="lg" required/>
                        </Form.Group>
                        {/*{*/}
                        {/*    productName + " " + selectorValue + " " + productPrice + " " + productOfferPrice + " " + productExpireData + " " + productDescription*/}
                        {/*}*/}
                    </Row>
                </Col>

            </Row>
        </Form>
    );
}

export default ProductForm;
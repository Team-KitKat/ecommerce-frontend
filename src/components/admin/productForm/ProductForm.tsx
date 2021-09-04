import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {IOption} from "../../../types/MainTypes";
import {useMutation} from "@apollo/client";
import {CREATE_PRODUCT_ITEM} from "../../../Grapgql/Mutationn";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Select from "react-select";
import {categoryDetails} from "../../../cores/categoryDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Inputs = {
    productName: string,
    productQty: number,
    productPrice: number,
    productDiscount: number,
    categoryType: IOption,
    expDate: Date,
    image:File

};
const ProductForm: React.FC = () => {
    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT_ITEM);

    const {register, reset ,handleSubmit, control, watch, formState: {errors}} = useForm<Inputs>();
    const notify = () => toast("Successfully Product Added.");

    const onSubmit: SubmitHandler<Inputs> = async event => {
        if(event.categoryType == null ) return;
        const product = await createProduct(
            {
                variables: {
                    id: event.productName + Math.floor(Math.random() * 1000000),
                    name: event.productName,
                    image: "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
                    price: Number(event.productPrice),
                    offerPrice: Number(event.productDiscount),
                    qty: Number(event.productQty),
                    category: event.categoryType.value,
                    expDate: event.expDate
                }
            }
        )
        if(error) {
            console.log(error);
        }
        if(data){
            console.log(data);
            reset();
        }

    };
    useEffect(() => {
        if(!data){
            return;
        }
        notify();
    }, [data]);


    return (

        <Form onSubmit={handleSubmit(onSubmit)} className="pb-5">
            <ToastContainer />
            <Row className='product-form pt-5 m-0'>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Category </Form.Label>
                        <Controller
                            name="categoryType"
                            control={control}
                            render={({field}) => <Select
                                isClearable
                                isSearchable
                                {...field}
                                options={categoryDetails}
                            />}
                        />
                        {watch("categoryType") == null && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control type="text" {...register("productName",
                            {required: true, maxLength: 20})} />
                        {errors.productName && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Current QTY (kg)</Form.Label>
                        <Form.Control type="number" {...register("productQty",
                            {required: true, maxLength: 20})} />
                        {errors.productQty && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Price (Rs) </Form.Label>
                        <Form.Control type="number" {...register("productPrice",
                            {required: true, maxLength: 20})} />
                        {errors.productPrice && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Discounted Price (Rs) </Form.Label>
                        <Form.Control type="number" {...register("productDiscount",
                            {required: true, maxLength: 20})} />
                        {errors.productDiscount && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Expire Date </Form.Label>
                        <Form.Control type="date" {...register("expDate",
                            {required: true})} />
                        {errors.expDate && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Image </Form.Label>
                        <Form.Control type="file" {...register("image",
                            {required: true})} />
                        {errors.image && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>

                    <Button variant="primary" className="btn btn-primary" type="submit">
                        {   !loading ? "Add Product" : <div className="spinner-border p-1 " role="status"></div>    }
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}> </Col>
            </Row>
        </Form>
    );
}

export default ProductForm;
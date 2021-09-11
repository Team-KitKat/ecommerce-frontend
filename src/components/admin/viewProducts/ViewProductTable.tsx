import React, {useEffect, useState} from 'react';
import PageTitle from "../pageTitle/PageTitle";
import {Button, Col, Form, Image, Row, Table} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import {IOption, IProduct} from "../../../types/MainTypes";
import {All_PRODUCTS} from "../../../Grapgql/Queries";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {ToastContainer} from "react-toastify";
import Select from "react-select";
import {categoryDetails} from "../../../cores/categoryDetails";
import PlaceHolder from "../../../assets/images/placeholders/placeholder.jpg";

type Inputs = {
    productName: string,
    categoryType: IOption,
};
const ViewProductTable: React.FC = () => {

    const {loading, error, data, refetch} = useQuery<{ products: IProduct[] }>(All_PRODUCTS);
    const [productList, setProductList] = useState<IProduct[] | null>(null);
    const [productListAll, setProductListAll] = useState<IProduct[] | null>(null);
    const {register, reset, handleSubmit, control, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async event => {
        if(!productListAll || !productList) return;
        let temp:IProduct [];
        if(event.productName != "" ){
            setProductList(productListAll.filter( item => { return item.name.toLocaleLowerCase().includes(event.productName.toLowerCase()) } ));
        }

        // if(event.categoryType.value != "" ){
        //
        //     setProductList(productList.filter( item => { return item.category.toLocaleLowerCase().includes(event.categoryType.value.toLowerCase()) } ))
        // }


    };

    useEffect(() => {
        if (!productList) {
            return;
        }
        // console.log(productList)
        setProductListAll(productList);
    }, [productList]);

    useEffect(() => {
        if (!data) {
            return;
        }
        setProductList(data.products);
        setProductListAll(data.products);
    }, [data]);

    return (
        <Row className="m-0 p-0">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Col xs={12} className="m-0 p-0">
                <Form onSubmit={handleSubmit(onSubmit)} className=" product-view-search-form">
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
                        {/*{watch("categoryType") == null && <Form.Text className="text-danger "> required </Form.Text>}*/}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Product Name </Form.Label>
                        <Form.Control type="text" {...register("productName",
                            { maxLength: 20})} />
                        {errors.productName && <Form.Text className="text-danger "> required </Form.Text>}
                    </Form.Group>


                    <Button variant="primary" className="btn btn-primary " type="submit">
                        {!loading ? "Search Product" : <div className="spinner-border p-1 " role="status"></div>}
                    </Button>
                </Form>
            </Col>
            <Col xs={12} className="m-0 p-0">
                <Table striped bordered hover className="">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productListAll &&
                        productListAll.map(item =>
                            <tr>
                                <td>{item._id}</td>
                                <td><Image src={item.image} height="50px" className="m-auto"/></td>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.discount}</td>
                                <td className="action_container">
                                    <Button> Add Quantity </Button>
                                    <Button className="btn-danger"> Block </Button>
                                    <Button className="btn-danger"> Delete</Button>
                                </td>
                            </tr>
                        )
                    }

                    </tbody>
                </Table>
            </Col>

        </Row>

    );
};

export default ViewProductTable;
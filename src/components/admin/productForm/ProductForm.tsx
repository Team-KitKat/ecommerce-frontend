import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, Col, Image, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {IOption} from "../../../types/MainTypes";
import {useMutation} from "@apollo/client";
import {CREATE_PRODUCT_ITEM} from "../../../Grapgql/Mutationn";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Select from "react-select";
import {categoryDetails} from "../../../cores/categoryDetails";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceHolder from "../../../assets/images/placeholders/placeholder.jpg";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import axios from "axios";

type Inputs = {
    productName: string,
    productQty: number,
    productPrice: number,
    productDiscount: number,
    categoryType: IOption,
    expDate: Date,
    image: File

};
const ProductForm: React.FC = () => {
    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT_ITEM);
    const templateProduct = useSelector((state: RootState) => state.templateProduct.value);
    const [imageUrl, setImageUrl] = useState<string>("");
    const {register, reset, handleSubmit, control, watch, formState: {errors}} = useForm<Inputs>();

    //image upload
    const [imageUploadFile, setImageUploadFile] = useState<File | null >(null);
    const [imageUploadMessage, setImageUploadMessage] = useState<string >("");
    const [imageUploadName, setImageUploadName] = useState<string >("");
    const [isLoading, setisLoading] = useState<boolean >(false);

    const getImage = (e: any) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setImageUploadFile(file);
            setImageUrl(URL.createObjectURL(e.target.files[0]));
            setImageUploadName(e.target.files[0].name);
        }
    };
    const uploadFile = async () => {

    };

    const notify = () => toast.success('Successfully Product Added.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const onSubmit: SubmitHandler<Inputs> = async event => {

        if (event.categoryType == null) return;
        setisLoading(true);
        const file  = imageUploadFile;
        // setImageUploadMessage({message:'Uploading...'})
        setImageUploadMessage("Uploading...");
        if(!file) return;
        const contentType = file.type; // eg. image/jpeg or image/svg+xml

        const generatePutUrl = 'http://localhost:4000/generate-put-url';
        const options = {
            params: {
                Key: file.name,
                ContentType: contentType
            },
            headers: {
                'Content-Type': contentType
            }
        };

        await axios.get(generatePutUrl, options).then(res => {
            const {
                data: { putURL }
            } = res;
            axios
                .put(putURL, file, options)
                .then( async (res: any) => {
                    setImageUploadMessage('Image Upload Successful')
                    setTimeout(() => {
                        setImageUploadMessage('');
                    }, 2000)
                    const product = await createProduct(
                        {
                            variables: {
                                id: event.productName + Math.floor(Math.random() * 1000000),
                                name: event.productName,
                                image: imageUploadName,
                                price: Number(event.productPrice),
                                offerPrice: Number(event.productDiscount),
                                qty: Number(event.productQty),
                                category: event.categoryType.value,
                                expDate: event.expDate
                            }
                        }
                    )
                    if (error) {
                        console.log(error);
                        setisLoading(false);

                    }
                    if (data) {
                        console.log(data);
                        setisLoading(false);
                        reset();
                    }
                })
                .catch( (err: Error) => {
                    setImageUploadMessage('Sorry, something went wrong on uploading image');
                    setisLoading(false);
                    console.log('err', err);
                    return false;
                });
        });


        setisLoading(false);
    };
    useEffect(() => {
        if (!data) {
            return;
        }
        setTimeout(() => {
            reset();
        }, 500)
        notify();
    }, [data]);

    const handleOnImageUpload = ( event : any ) => {
        setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
    return (

        <Form onSubmit={handleSubmit(onSubmit)} className="pb-5">
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
                        {/*{watch("categoryType") == null && <Form.Text className="text-danger "> required </Form.Text>}*/}
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
                            {required: true})} accept='image/*'
                        onChange={getImage}/>
                        {errors.image && <Form.Text className="text-danger "> required </Form.Text>}
                        <p> {imageUploadMessage}</p>
                    </Form.Group>

                    <Button variant="primary" className="btn btn-primary" type="submit">
                        {!loading || isLoading ? "Add Product" : <div className="spinner-border p-1 " role="status"></div>}
                    </Button>


                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="template_product_name_container">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={10} xl={10} className="m-auto template_product_name">
                            <h5 className="text-center pb-3"> Product View</h5>
                            <Row className="image-container">
                                {imageUrl == "" && <Image src={PlaceHolder} width="80%" className="m-auto"/> }
                                <Image src={imageUrl} width="80%" className="m-auto"/>
                            </Row>
                            <h6 className="text-center py-3"> {watch('productName') ? watch('productName') : "temp.."}</h6>
                            <Row className="details-container">
                                <Col xs={12} sm={12} md={12} lg={10} xl={10} className="m-auto">
                                    <div> Category : {watch("categoryType") ? watch("categoryType").value : "not selected"}</div>
                                    <div > Price : Rs {watch("productPrice") ? watch("productPrice") : "00"}.00</div>
                                    <div> Discount : Rs {watch("productDiscount") ? watch("productDiscount") : "00"}.00</div>
                                    <div> Quantity :  {watch("productQty") ? watch("productQty") : "00"} Kg</div>
                                    <Button className="float-right ">
                                        Add to Cart
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>

    );
}

export default ProductForm;
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, Image, Row} from "react-bootstrap";
import {IProduct} from "../../../types/MainTypes";
import {useDispatch, useSelector} from "react-redux";
import {add, updateCheckedProducts,} from "../../../redux/checkoutProductSlice";
import {RootState} from "../../../redux/store";

type productProps = {
    productInfo: IProduct;
    index: number;
    // UpdateProductCount:(count:number,product:IProduct,index:number)=>void;
}
const Product: React.FC<productProps> = (props) => {
    const checkedProducts = useSelector((state: RootState) => state.checkoutProducts.value);
    const {productInfo, index} = props;
    const [showUpdate, setShowUpdate] = useState(false);
    const [product, setProduct] = useState<IProduct>(() => productInfo);
    const dispatch = useDispatch();
    const [productCount, setProductCount] = useState<number>(1);
    const handleAddtoCart = (addedProduct: IProduct, index: number) => {
        dispatch(add(addedProduct));
        if ((index + 1) == addedProduct.id) {
            setShowUpdate(true);
        }

    }
    console.log(props.productInfo);
    const handleUpdateCart = (addedProduct: IProduct, index: number) => {
        if ((index + 1) == addedProduct.id) {
            setShowUpdate(true);
        }
        else {
            setShowUpdate(false)
        }

    }

    const handleCounter = (e: ChangeEvent<HTMLInputElement>) => {
        setProductCount(parseInt(e.target.value));
        setProduct({
            id: productInfo.id,
            image: productInfo.image,
            name: productInfo.name,
            category: productInfo.category,
            qty: productCount+1,
            price: productInfo.price,
            discount: productInfo.discount,
            total: productInfo.total
        })
    }

    const handleCountUpdate = (updatedProduct: IProduct) => {
        dispatch(updateCheckedProducts(updatedProduct))
    }
    // useEffect(() => {
    //     checkedProducts.map((chProduct: IProduct) => (
    //         handleUpdateCart(chProduct,index)
    // ))
    // }, [checkedProducts.length])

    return (
        <Col xs={6} sm={6} lg={3} md={4} xl={3} className='m-0 px-xl-3 px-sm-3 px-lg-3 px-md-3 product-area single-product'>
            <Row className={'px-1 py-0  m-0 mb-3 text-center product-body'}>
                <Col xs={12} className='p-0 m-0'>s
                    <img
                        className='m-0 px-0 px-lg-4 px-xl-5 px-md-3 px-sm-2  product-image'
                        src={productInfo.image} alt="product"/>
                </Col>
                <Col xs={12} className='mt-3 mb-3 mb-lg-4 mb-xl-4 mb-md-4 mb-sm-4 p-0 text-center title'>
                    <h5 className={'ml-0 ml-sm-2 pb-0 pb-sm-2'}>{productInfo.name}</h5>
                </Col>
                <Col xs={12} className='mt-3 mt-sm-4 p-0 mb-0'>
                    <Row className=''>
                        <Col xs={5} className={'price-tag text-secondary'}>
                            <label><s>{productInfo.discount}</s></label>
                        </Col>
                        <Col xs={7} className={'pl-0 pl-sm-5 pl-xl-5 pl-md-5 pl-lg-5 price-tag text-success'}>
                            <label className=''><b>Rs.{productInfo.price}</b></label>
                        </Col>
                    </Row>
                    <Form className='add-product-form px-sm-2'>
                        <Row className='add-product mt-2'>
                            <Col xs={12} md={4} xl={4} lg={4} sm={12} className={'number-input'}>
                                <Form.Group>
                                    <FormControl type='number' min={1} placeholder='1' className='product-qty'
                                                 onChange={handleCounter}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={8} xl={8} lg={8} sm={12}
                                 className={'px-md-3 px-lg-3 px-xl-3 pb-2 pb-xl-0 pb-lg-0 pb-md-0'}>
                                {showUpdate ?
                                    <Button className='border-primary text-primary' variant="light"
                                            onClick={() => handleCountUpdate(product)}>Update</Button> :
                                    <Button className='' variant="success"
                                            onClick={() => handleAddtoCart(product, index)}>Add
                                        to Cart</Button>
                                }
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
};

export default Product;
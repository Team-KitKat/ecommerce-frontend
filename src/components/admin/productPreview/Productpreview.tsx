import React from "react";
import {IProduct} from "../../../types/MainTypes";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

type productProps = {
    productInfo: IProduct;
}
const Productpreview: React.FC<productProps> = (props) => {
    const productInfo:IProduct=props.productInfo

        return(
                <Row style={{border:"2px solid green"}} className='px-2 py-2 product-preview'>
                    <Col xs={12} className="text-center">
                        <h1>Product Preview</h1>
                    </Col>
                    <Col xs={12} className='p-0 m-0 product-image-container' style={{width:"100%", alignContent:"center"}}>
                        <img
                            className='m-0 px-0 px-lg-6 px-xl-5 px-md-3 px-sm-2 d-block mx-auto img-fluid  product-image'
                            src={productInfo.image}  alt="product"/>
                    </Col>
                    <Col xs={12} className='mt-3 mb-3 mb-lg-4 mb-xl-4 mb-md-4 mb-sm-4 p-0 text-center title'>
                        <h2 className={'ml-0 ml-sm-2 pb-0 pb-sm-2'}>{productInfo.name}</h2>
                    </Col>
                    <Col xs={12} className='mt-3 mt-sm-4 p-0 mb-0'>
                        <Row className='mx-0'>
                            <Col xs={5} className={'price-tag text-secondary text-center px-0'}>
                                <label><s>{productInfo.discount}</s></label>
                            </Col>
                            <Col xs={7} className={'pl-0 pl-sm-5 pl-xl-5 pl-md-5 pl-lg-5 px-0 price-tag text-success text-center'}>
                                <label className=''><b>Rs.{productInfo.price}</b></label>
                            </Col>
                        </Row>
                        <Form className='add-product-form px-sm-2'>
                            <Row className='add-product mt-2 mx-0'>
                                <Col xs={12} md={4} xl={4} lg={4} sm={12} className={'number-input px-0'}>
                                    <Form.Group>
                                        <FormControl type='number' min={1} placeholder='1' className='product-qty'/>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={8} xl={8} lg={8} sm={12}
                                     className={'px-md-3 px-lg-3 px-xl-3 pb-2 pb-xl-0 pb-lg-0 pb-md-0 text-right px-0'}>
                                        <Button className='' variant="success"> Add toCart </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
        );

}

export default Productpreview;
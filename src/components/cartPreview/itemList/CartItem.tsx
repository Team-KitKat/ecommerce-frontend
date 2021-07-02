import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import Item from '../../../assets/images/edcoco.jpg'
import {IProduct} from "../../../types/MainTypes";

type cartProps={
    checkedProducts:IProduct;
}
const CartItem: React.FC <cartProps>= (props) => {
    const {checkedProducts}=props;
    const imgUrl=require('../../../assets/images/'+ checkedProducts.image)
    return (
        <li>

            <Row className='cart-item p-1'>

                <Col xs={4}>
                    <Image src={imgUrl.default} alt='Item Image' className='item-image'/>
                </Col>
                <Col xs={8}>

                    <Row className=''>
                        <Col xs={6}>
                            <label>{checkedProducts.name}</label>
                        </Col>
                        <Col xs={6}>
                            <i className='feather-trash float-right text-secondary'/>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col xs={6}>
                            <label className='text-secondary'>{checkedProducts.qty}</label>
                        </Col>
                        <Col xs={6}>
                            <label className='text-success'>{checkedProducts.price}</label>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </li>
    );
};

export default CartItem;
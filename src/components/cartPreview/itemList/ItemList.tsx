import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CartItem from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {IProduct} from "../../../types/MainTypes";
import Product from "../../productArea/singleProduct/Product";

const ItemList: React.FC = () => {
    const checkoutProducts=useSelector((state:RootState)=>state.checkoutProducts.value);
    return (
        <Container fluid={true} className='m-0 cart-product-list'>
            <Col xs={12}>
                <ul className='ml-0 pl-0 list-unstyled'>
                    {
                        checkoutProducts.map((product:IProduct,index:number) => (
                            <CartItem checkedProducts={product} key={index}/>
                        ))
                    }
                </ul>
            </Col>
        </Container>
    );
};

export default ItemList;
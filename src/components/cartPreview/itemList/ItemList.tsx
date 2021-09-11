import React from 'react';
import {Col, Container} from "react-bootstrap";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {IOrderCheckout} from "../../../types/MainTypes";

const ItemList: React.FC = () => {
    const checkoutProducts=useSelector((state:RootState)=>state.checkoutProducts.value);
    return (
        <Container fluid={true} className='m-0 cart-product-list'>
            <Col xs={12}>
                <ul className='ml-0 pl-0 list-unstyled'>
                    {
                        checkoutProducts.map((product:IOrderCheckout,index:number) => (
                            <CartItem checkedProducts={product} key={index} />
                            // <h1>Hansana</h1>
                        ))
                    }
                </ul>
            </Col>
        </Container>
    );
};

export default ItemList;
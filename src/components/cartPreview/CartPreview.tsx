import React, {useRef, useState} from 'react';
import {Button, Col, Container, Image, Overlay, Popover, Row} from "react-bootstrap";
import EmptyImg from "../../assets/images/empty_cart.png";
import ItemList from "./itemList/ItemList";
import CartTotal from "./totalSection/CartTotal";

type CartPreviewProps = {
    showItemCart: boolean
    target: any
}

const CartPreview: React.FC<CartPreviewProps> = (props) => {

    const {showItemCart,target} = props;
    const ref = useRef(null);

    return (
        <Row ref={ref} className='item-cart-container'>
            <Col xs={12}>
            <Overlay
                show={showItemCart}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained" className='item-cart-pop '>
                    {/*<Popover.Title as="h3">Items in Your Cart</Popover.Title>*/}
                    <Popover.Content>
                            <Row className='cart-content'>
                                <ItemList/>
                                <CartTotal/>
                            </Row>
                        <Button className='btn-buy bg-success' href='/checkout'> Checkout </Button>
                    </Popover.Content>
                </Popover>
            </Overlay>
            </Col>
        </Row>
    );
};

export default CartPreview;
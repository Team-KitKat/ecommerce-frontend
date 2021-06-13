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
        <Container fluid={true} ref={ref} className='item-cart-container'>
            <Overlay
                show={showItemCart}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}

            >
                <Popover id="popover-contained" className='item-cart-pop text-center'>
                    <Popover.Title as="h3">Items in Your Cart</Popover.Title>
                    <Popover.Content>
                            <Row className='cart-content'>
                                <ItemList/>
                                <CartTotal/>
                            </Row>
                        <Button className='bg-success'>Buy Now</Button>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </Container>
    );
};

export default CartPreview;
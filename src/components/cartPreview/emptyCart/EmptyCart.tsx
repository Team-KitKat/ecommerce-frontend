
import React, {useRef, useState} from 'react';
import {Button, Container, Image, Overlay, Popover} from "react-bootstrap";
import EmptyImg from "../../../assets/images/empty_cart.png";
type EmptyCartProps = {
    showEmptyCart: boolean
    target: any
}
const EmptyCart: React.FC<EmptyCartProps> = (props) => {

    const {showEmptyCart,target} = props;
    const ref = useRef(null);


    return (
        <Container fluid={true} ref={ref} className='empty-cart-container'>
        <Overlay
            show={showEmptyCart}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}

        >
                <Popover id="popover-contained" className='empty-cart-pop text-center'>
                    <Popover.Title as="h3">Your Cart is Empty</Popover.Title>
                    <Popover.Content>
                        <Image className='empty-image' src={EmptyImg} />
                        <Button className='bg-info'>Shop Now</Button>
                    </Popover.Content>
                </Popover>
        </Overlay>
        </Container>



    );
};

export default EmptyCart;
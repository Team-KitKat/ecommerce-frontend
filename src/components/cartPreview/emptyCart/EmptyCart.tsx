import React from 'react';
import {Button, Image, Popover} from "react-bootstrap";
import EmptyImg from "../../../assets/images/empty_cart.png";
const EmptyCart: React.FC = () => {

    return (
                <Popover id="popover-contained" className='empty-cart'>
                    <Popover.Title as="h3">Your Cart is Empty</Popover.Title>
                    <Popover.Content>
                        <Image className='empty-image' src={EmptyImg} />
                        <Button className='bg-info'>Lets Start Shopping</Button>
                        <strong>Please add items here!!</strong>
                    </Popover.Content>
                </Popover>


    );
};

export default EmptyCart;
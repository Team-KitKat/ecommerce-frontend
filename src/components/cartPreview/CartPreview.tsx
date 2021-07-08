import React, {useEffect, useRef, useState} from 'react';
import {Button, Col, Container, Image, Overlay, Popover, Row} from "react-bootstrap";
import EmptyImg from "../../assets/images/empty_cart.png";
import ItemList from "./itemList/ItemList";
import CartTotal from "./totalSection/CartTotal";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

type CartPreviewProps = {
    showItemCart: boolean
    target: any
}

const CartPreview: React.FC<CartPreviewProps> = (props) => {

    const [showEmptyCart, setShowEmptyCart] = useState(false);

    const checkoutProducts=useSelector((state:RootState)=>state.checkoutProducts.value);

    useEffect( () => {
        if(checkoutProducts.length == 0) {
            setShowEmptyCart(true);
        }
        else {
            setShowEmptyCart(false);
        }
    },[checkoutProducts]);

    const {showItemCart,target} = props;
    const ref = useRef(null);

    const history = useHistory();
    function handleLinClick(path:string) {
        history.push(path);
    }

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
                        {showEmptyCart ? <Image className='empty-image' src={EmptyImg} />
                            : <Row className='cart-content'>
                                <ItemList/>
                                <CartTotal/>
                                <Button className='btn-buy bg-success mx-4' onClick={() => handleLinClick('/checkout')}> Checkout </Button>
                            </Row>}
                    </Popover.Content>
                </Popover>
            </Overlay>
            </Col>
        </Row>
    );
};

export default CartPreview;
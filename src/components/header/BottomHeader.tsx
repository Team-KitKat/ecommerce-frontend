import React, {useState} from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import CartPreview from "../cartPreview/CartPreview";
import EmptyCart from "../cartPreview/emptyCart/EmptyCart";

type BottomHeaderProps = {
    itemCount : number | 0
}

const BottomHeader: React.FC<BottomHeaderProps> = (props) => {

    const {itemCount} = props;
    const [showEmptyCart, setShowEmptyCart] = useState(false);
    const [showItemCart, setShowItemCart] = useState(false);
    const [itemTarget, setItemTarget] = useState(null);
    const [emptyTarget, setEmptyTarget] = useState(null);

    const handleClick = (event: any) => {

        if(itemCount != 0) {
            setShowItemCart(!showItemCart);
            setItemTarget(event.target);
        }
        else {
            setShowEmptyCart(!showEmptyCart);
            setEmptyTarget(event.target);
        }
    };

    return (
        <Navbar sticky='top' id='bottom_header' className='mb-2  bottom-header navbar-expand'>
            <Col xs={12} className='header-card'>
                <Row className='m-0 py-2 '>
                    <Col className='ml-sm-3 ml-lg-0'
                         lg={{span: 2, offset: 2}} md={2} sm={2} xs={{span: 3, offset: 1}}>
                        <Row className='justify-content-end pl-md-4 ml-md-4 pl-sm-3 pt-1'>
                            <a className='brand' href='/'>LOGO</a>
                        </Row>
                    </Col>
                    <Col className='p-0 pr-md-5 pl-sm-4 pr-lg-5'
                         lg={{span: 6, offset: 4}} md={{span: 4, offset: 5}}
                         sm={{span: 5, offset: 4}} xs={{span: 2, offset: 5}}>
                        <Row className='m-lg-0 mr-md-4 pr-md-4'>
                            <Col className='p-0' lg={{span: 2, offset: 7}} md={7} sm={3}>
                                <Row className='justify-content-end m-0'>
                                    <i className='feather-shopping-cart text-right' onClick={handleClick}>
                                        <span><Badge>{itemCount}</Badge></span>
                                    </i>
                                </Row>
                                <CartPreview showItemCart={showItemCart} target={itemTarget}/>
                                <EmptyCart showEmptyCart={showEmptyCart} target={emptyTarget}/>
                            </Col>
                            <Col className='p-0 px-2 checkout-btn-col' lg={{span: 3, offset: 0}} md={5} sm={3}>
                                <Button variant="success" className='checkout-btn py-1' href='/checkout'>Checkout</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Navbar>
    );
};

export default BottomHeader;
import React, {ChangeEvent} from 'react';
import {CardDeck, Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";
import {useDispatch, useSelector} from "react-redux";
import{RootState} from "../../../redux/store";
import {IProduct} from "../../../types/MainTypes";
import {updateProducts} from "../../../redux/productSlice";
import {updateCheckoutProducts} from "../../../redux/checkoutProductSlice";
const ProductList: React.FC = () => {
    const products=useSelector((state:RootState)=>state.products.value);
    const dispatch = useDispatch();
    const UpdateProductCount=(count:number,product:IProduct,index:number)=>{
        console.log(count,index);
       const newProduct={
           ...product , qty:count,
       }
       const newProducts=products.slice();
       newProducts.splice(index,1,newProduct);
       dispatch(updateCheckoutProducts(newProducts))
    }
    return (
        <Col xs={12}>
            <Container className='mb-5 product-list'>
                <Row className='list-title'>
                    <Col xs={12} className=''>
                        <h5>Grocery</h5>
                    </Col>
                </Row>
                <Row className='product-list-container'>
                    {
                        products.map((product:IProduct,index:number) => (
                            // <Product productInfo={product} index={index}/>
                                <Product productInfo={product} index={index} UpdateProductCount={UpdateProductCount}/>
                            ))
                    }
                </Row>

            </Container>
        </Col>
    );
};

export default ProductList;
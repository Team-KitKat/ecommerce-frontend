import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";
import {useDispatch, useSelector} from "react-redux";
import{RootState} from "../../../redux/store";
import {IProduct} from "../../../types/MainTypes";
import {useQuery} from "@apollo/client";
import {LOAD_PRODUCTS} from "../../../graphql/Query";

const ProductList: React.FC = () => {
    const {data}=useQuery(LOAD_PRODUCTS);
    const [productdata,setProductdata] = useState<IProduct[]>([]);

    useEffect(() => {
        //console.log(data)
        if(data){
            setProductdata(data.getAllProducts)
        }

    }, [data]);
    //console.log("These are product data",productdata);
    const checkedProducts=useSelector((state:RootState)=>state.checkoutProducts.value);
    const products=useSelector((state:RootState)=>state.products.value);
    const dispatch = useDispatch();
    // const UpdateProductCount=(count:number,product:IProduct,index:number)=>{
    //     console.log(count,index);
    //    const newProduct={
    //        ...product , qty:count,
    //    }
    //    const newProducts=products.slice();
    //    newProducts.splice(index,1,newProduct);
    //    dispatch(updateCheckedProducts(newProducts))
    // }

    
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
                        /*products.map((product:IProduct,index:number) => (

                                <Product productInfo={product} productdata={productdata} index={index} key={index}
                                         // UpdateProductCount={UpdateProductCount}
                                />

                            ))*/
                        productdata.map((product:IProduct,index:number) => (

                            <Product productInfo={product}  index={index} key={index}
                                // UpdateProductCount={UpdateProductCount}
                            />

                        ))
                    }
                </Row>

            </Container>
        </Col>
    );
};

export default ProductList;
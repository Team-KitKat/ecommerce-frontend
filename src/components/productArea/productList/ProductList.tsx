import React, { useEffect, useState} from 'react';
import { Col, Container, Row} from "react-bootstrap";
import Product from "../singleProduct/Product";
import {IProduct} from "../../../types/MainTypes";
import { useQuery} from "@apollo/client";
import {All_PRODUCTS} from "../../../Grapgql/Queries";

const ProductList: React.FC = () => {
    const [productList, setProductList] = useState<IProduct[] | null>(null);
    const { loading, error, data , refetch } = useQuery<{products: IProduct[]}>(All_PRODUCTS);

    // const UpdateProductCount=(count:number,product:IProduct,index:number)=>{
    //     console.log(count,index);
    //    const newProduct={
    //        ...product , qty:count,
    //    }
    //    const newProducts=products.slice();
    //    newProducts.splice(index,1,newProduct);
    //    dispatch(updateCheckedProducts(newProducts))
    // }

    // const [getUser, {data, loading, error}] = useMutation(LOAD_PRODUCTS);

    const handleOnGetProduct = () => {

    }
    useEffect(() => {
        if(!data){
            return;
        }
        setProductList(data.products);
    }, [data]);

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
                        productList &&
                        productList.map((product:IProduct,index:number) => (

                                <Product productInfo={product} index={index} key={index}
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
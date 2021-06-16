import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";
import Header from "../header/Header";
import Product from "../productArea/singleProduct/Product";
import ProductList from "../productArea/productList/ProductList";
import ProductArea from "../productArea/ProductArea";
import {Container, Row} from "react-bootstrap";
import Footer from "../footer/Footer";

const Home: React.FC = () => {

  return (
    <Row className='m-0 shopping-cart'>
        <Welcome/>
        <ProductArea/>
      <Footer/>
    </Row>
  )
};

export default Home;
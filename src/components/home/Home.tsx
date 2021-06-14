import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";
import Header from "../header/Header";
import Product from "../productArea/singleProduct/Product";
import ProductList from "../productArea/productList/ProductList";
import ProductArea from "../productArea/ProductArea";

const Home: React.FC = () => {

  return (
    <div className='shopping-cart'>
        <Header itemCount={1}/>
        <NavigationBar/>
        <Welcome/>
        <ProductArea/>
    </div>
  )
};

export default Home;
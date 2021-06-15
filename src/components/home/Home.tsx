import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";
import Header from "../header/Header";
import Product from "../productArea/singleProduct/Product";
import ProductList from "../productArea/productList/ProductList";
import Footer from "../footer/Footer";

const Home: React.FC = () => {

    return (
        <div className='shopping-cart'>
            <Header itemCount={4} showCart={() => {
                console.log('show cart')
            }}/>
            <NavigationBar/>
            <Welcome/>
            <Footer/>
        </div>

    );
};

export default Home;
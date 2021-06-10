import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";
import Product from "../productArea/singleProduct/Product";
import ProductList from "../productArea/productList/ProductList";

const Home: React.FC = () => {
    return (
        <div className='shopping-cart'>
            <NavigationBar/>
            <Welcome/>

        </div>
    );
};

export default Home;
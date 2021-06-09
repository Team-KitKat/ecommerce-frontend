import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";
import Product from "../productArea/singleProduct/Product";

const Home: React.FC = () => {
  return (
    <div className='shopping-cart'>
      <NavigationBar/>
      <Welcome/>
      <Product/>
    </div>
  );
};

export default Home;
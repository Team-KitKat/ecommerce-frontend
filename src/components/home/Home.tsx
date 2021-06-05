import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";

const Home: React.FC = () => {
  return (
    <div className='shopping-cart'>
      <NavigationBar/>
      <Welcome/>
    </div>
  );
};

export default Home;
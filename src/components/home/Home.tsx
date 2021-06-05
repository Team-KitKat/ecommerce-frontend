import React from 'react';
import NavigationBar from "../navbar/NavigationBar";
import Welcome from "../welcomeImage/Welcome";

const Home: React.FC = () => {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Welcome/>
      </React.Fragment>
    );
};

export default Home;
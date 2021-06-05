import React from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "./components/navbar/NavigationBar";
import Welcome from "./components/welcomeImage/Welcome";
import './App.scss';

const App: React.FC = () => {
    return (
        <div className='shopping-cart'>
            <NavigationBar/>
            <Welcome/>
        </div>

    );
};

export default App;
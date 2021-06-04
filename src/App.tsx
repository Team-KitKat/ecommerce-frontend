import React from 'react';
import {Container} from "react-bootstrap";
import NavigationBar from "./components/navbar/NavigationBar";
import Welcome from "./components/welcomeImage/Welcome";
import './App.scss';

const App: React.FC = () => {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Welcome/>
        </React.Fragment>

    );
};

export default App;
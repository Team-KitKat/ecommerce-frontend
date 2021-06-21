import React from 'react';
import './App.scss';
import Login from "./components/login/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/home/Home";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Header from "./components/header/Header";
import NavigationBar from "./components/navbar/NavigationBar";
import {Row} from "react-bootstrap";
import BottomHeader from "./components/header/BottomHeader";

toast.configure();

const App: React.FC = () => {
    return (
        <Row className='p-0 m-0'>
            <Header/>
            <BottomHeader itemCount={1}/>
            <NavigationBar/>
      <Router>
        <Route exact path={'/'} component={Home}/>
        {/*<Route exact path={'/home'} component={Home}/>*/}
      </Router>
        </Row>
    );
};

export default App;
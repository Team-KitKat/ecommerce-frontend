import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/home/Home";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import Header from "./components/header/Header";
import NavigationBar from "./components/navbar/NavigationBar";
import {Row} from "react-bootstrap";
import BottomHeader from "./components/header/BottomHeader";
import CheckoutPanel from "./components/checkout/checkoutPanel/CheckoutPanel";
import Faq from "./pages/faq/Faq";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/aboutUs/AboutUs";
import Login from "./components/login/Login";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

toast.configure();

const App: React.FC = () => {
    const checkoutProducts=useSelector((state:RootState)=>state.checkoutProducts.value);
    return (
        <Row className='p-0 m-0'>

            <Router>
                <Header/>
                <BottomHeader itemCount={checkoutProducts.length}/>
                <NavigationBar/>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/checkout'} component={CheckoutPanel}/>
              <Route exact path={'/login'} component={Login}/>
              <Route exact path={'/register'} component={Login}/>
              <Route exact path={'/faq'} component={Faq}/>
              <Route exact path={'/contactUs'} component={ContactUs}/>
              <Route exact path={'/aboutUs'} component={AboutUs}/>
            </Router>
        </Row>
    );
};

export default App;
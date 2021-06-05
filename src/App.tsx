import React from 'react';
import './App.scss';
import Login from "./components/login/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/home/Home";

const App: React.FC = () => {
    return (
      <Router>
        <Route exact path={'/'} component={Login}/>
        <Route exact path={'/home'} component={Home}/>
      </Router>
    );
};

export default App;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Bundle from './router/Bundle';

import GetRouter from "./router/router";
import Home from "./pages/Home/Home";
import HomeService from "./pages/ServiceNote/HomeService/HomeService";
import HDay from "./pages/ServiceNote/HDay/HDay";

export default class App extends Component {
    render() {
        return (
            // <Home />
            <Router basename="/dist">
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/index" component={Home} />
                    <Route path="/homeService" component={HomeService} />
                    <Route path="/HDay" component={HDay} />
                </div>
            </Router>
            // <Switch basename="/dist">
            //         <Route exact path="/" component={Home} />
            //         <Route path="/index" component={Home} />
            //         <Route path="/homeService" component={HomeService} />
            //         <Route path="/HDay" component={HDay} />
            // </Switch>
        )
    }
}
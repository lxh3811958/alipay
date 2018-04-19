import React,{ Component } from "react";
import ReactDOM from "react-dom";
import GetRouter from "./router/router";
import Home from "./pages/Home/Home";

export default class App extends Component{
    render() {
        return (
            <div>
            <Home />
            <GetRouter />
            </div>
        )
    }
}
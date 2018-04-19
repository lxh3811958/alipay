/*
* @Author: lixh
* @Date:   2018-01-15 10:23:47
 * @Last Modified by: lixh
<<<<<<< HEAD
 * @Last Modified time: 2018-04-19 11:12:57
=======
 * @Last Modified time: 2018-04-19 11:11:37
>>>>>>> master
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import "./Config/Config.css";

import GetRouter from './router/router';
import Bundle from './router/Bundle';

import Home from "./pages/Home/Home";
import HomeService from './pages/ServiceNote/HomeService/HomeService';
import HDay from './pages/ServiceNote/HDay/HDay';
import Config from './Config/Config';

document.documentElement.style.fontSize = Config.WindowWidth / 12.42 + 'px';
/*初始化*/
// renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
else{
    console.log(GetRouter())
}

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
<<<<<<< HEAD
// 测试dev-180418-home
=======
// 测试master
>>>>>>> master
ReactDOM.render((
    // GetRouter()
    <Router basename="/dist">
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/index" component={Home} />
            <Route path="/homeService" component={HomeService} />
            <Route path="/HDay" component={HDay} />
        </div>
    </Router>
), document.getElementById('app')
)
/*
 * @Author: lixh
 * @Date:   2018-01-15 10:37:18
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-19 21:38:19
*/
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import HomeService from 'bundle-loader?lazy&name=HomeService!pages/ServiceNote/HomeService/HomeService';
import HDay from 'bundle-loader?lazy&name=HDay!pages/ServiceNote/HDay/HDay';



const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Home />
        }
    </Bundle>
);
const GetRouter = () => (
        <div>
            <Router basename="/dist">
                <div>
                    <Route exact path="/" component={createComponent(Home)} />
                    <Route path="/index" component={createComponent(Home)} />
                    <Route path="/homeService" component={createComponent(HomeService)} />
                    <Route path="/HDay" component={createComponent(HDay)} />
                </div>
            </Router>
        </div>
    )
// class GetRouter extends Component {
//     render() {
//         return (
//             <Switch basename="/dist">
//                 <div>
//                     <Route exact path="/" component={createComponent(Home)} />
//                     <Route path="/index" component={createComponent(Home)} />
//                     <Route path="/homeService" component={createComponent(HomeService)} />
//                     <Route path="/HDay" component={createComponent(HDay)} />
//                 </div>
//             </Switch>
//         )
//     }
// }

// <div>
// <Route exact path="/" component={Home} />
// <Route path="/index" component={Home} />
// <Route path="/homeService" component={HomeService} />
// <Route path="/HDay" component={HDay} />
// </div>

export default GetRouter;
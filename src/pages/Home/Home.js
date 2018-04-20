/*
 * @Author: lixh
 * @Date:   2018-01-15 10:38:27
 * @Last Modified by: lixh
 * @Last Modified time: 2018-04-20 11:00:33
*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

// import Bundle from './../../router/Bundle';

import Config from './../../Config/Config';
import request from "./../../api/request";
import layer from "./../../Layer/layer";
import GetRouter from "./../../router/router";
// import HomeService from './../ServiceNote/HomeService/HomeService';
// import HDay from './../ServiceNote/HDay/HDay';
// import HomeService from 'bundle-loader?lazy&name=HomeService./../ServiceNote/HomeService/HomeService';
// import HDay from 'bundle-loader?lazy&name=HDay./../ServiceNote/HDay/HDay';

import './Home.css';
import "./../../Layer/layer.css";

import guideMapAdd from './images/guideMapAdd.png';
import guideMapBtn from './images/guideMapBtn.png';
import guideMapVip from './images/guideMapVip.png';
import guideMapService from './images/guideMapService.png';
import appIcon1 from './images/appIcon1.png';
import appIcon2 from './images/appIcon2On.png';
import appIcon4 from './images/appIcon4.png';
import appIcon5 from './images/appIcon5.png';
import serviceIconHome from './images/serviceIconHome.png';
import serviceIconNanny from './images/serviceIconNanny.png';
import serviceIconMaternity from './images/serviceIconMaternity.png';
import serviceIconCook from './images/serviceIconCook.png';
import serviceIconWash from './images/serviceIconWash.png';
import serviceIconRepair from './images/serviceIconRepair.png';
import serviceIconPhone from './images/serviceIconPhone.png';
import serviceIconOffice from './images/serviceIconOffice.png';
import hotIcon from './images/hotIcon.png';
import newIcon from './images/newIcon.png';
import locationIcon from './images/locationIcon.png';


const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.changeInputVal = this.changeInputVal.bind(this);
        this.clickMe = this.clickMe.bind(this);
        this.state = {
            list: list,
            testVal1: "me",
            inputVal: '',
        }
    }
    clickMe() {
    }
    changeInputVal(e) {
        this.setState({ inputVal: e.target.value });
    }
    render() {
        return (
            <div>
                {list.map(item =>
                    <div key={item.objectID}>
                        <input onClick={this.clickMe} onChange={this.changeInputVal} type="text" />
                    </div>
                )}
            </div>
        )
    }
}
class SlideBanner extends Component {
    render() {
        return (
            <div>
                {
                    this.props.imgList.map((val, index) =>
                        <div key={index} id={index}>
                            <img src={val.imgUrl} val={JSON.stringify(val)} title={val.title} />
                        </div>
                    )
                }
            </div>
        )
    }
}

class GuideMap extends Component {
    render() {
        return (
            <div className="guideMapLayer">
                <div className="guideMap1 guideMap">
                    <img className="guideMapAdd" src={guideMapAdd} />
                    <img className="guideMapBtn" src={guideMapBtn} />
                </div>
                <div className="guideMap2 guideMap">
                    <img className="guideMapVip" src={guideMapVip} />
                    <img className="guideMapService" src={guideMapService} />
                    <img className="guideMapBtn" src={guideMapBtn} />
                </div>
            </div>
        )
    }
}
class Head extends Component {
    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
    }
    onClickMe() {
    }
    render() {
        return (
            <div className="location defaultDiv clearfix">
                <img className="locationIcon floatRight" src={locationIcon} />
                <p className="cityName floatRight textRight" onClick={() => this.onClickMe()}>选择城市</p>
            </div>
        )
    }
}
class SmallIcon extends Component {
    render() {
        return (
            <div className="appIcon clearfix">
                <div id="youhui">
                    <img src={appIcon1} />
                    <img className="newIcon" src={newIcon} />
                    <p>优惠1</p>
                </div>
                <div id="beidiao">
                    <img src={appIcon2} />
                    <img className="newIcon" src={newIcon} />
                    <p>优惠</p>
                </div>
                <div id="maicai">
                    <img src={appIcon4} />
                    <p>优惠</p>
                </div>
                <div id="licai">
                    <img src={appIcon5} />
                    <p>优惠</p>
                </div>
            </div>
        )
    }
}
class ShowBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: 176,
            slideIndex: 0,
            imgList: [1, 2]
        };
    }
    componentDidMount() {
        let bodyData = {
            action: "getIndexModel",
            indexHeaderImgStyle: '1242x387'
        };
        request.post(Config.baseUrl + "systemConfigAction.do", bodyData).then(res => {
            if (res.returnCode == "0") {
                let resData = res.data, imgList = resData.headerImgList;
                this.setState({
                    imgList: imgList
                });
            }
            else {
                layer.open({
                    content: res.returnMessage,
                    btn: "我知道了",
                    yes: function (index) {
                        layer.close(index);
                    }
                });
            }
        });
    }
    render() {
        return (
            <div className="bannerList">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        selectedIndex={0}
                        autoplayInterval={2000}
                        dotStyle={{ display: 'block', width: '8px', height: '8px', margin: '0 3px', borderRadius: '50%', backgroundColor: '#ccc' }}
                        dotActiveStyle={{ display: 'block', width: '8px', height: '8px', margin: '0 3px', borderRadius: '50%', backgroundColor: '#fff' }}
                    >
                        {this.state.imgList.map((val, index) => (
                            <a
                                key={index}
                                href={val.sourceUrl}
                                style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                            >
                                <img
                                    src={val.imgUrl}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>


                    <WhiteSpace />
                </WingBlank>
            </div>
        );
    }
}
class ServiceItem extends Component {
    render() {
        return (
            <Router basename="/dist">
                <div>
                    <p className="serviceTitle defaultDiv textLeft">服务</p>
                    <p className="serviceContent defaultDiv textLeft">services</p>
                    <div className="defaultDiv clearfix">
                        <Link to="/homeService">
                            <div id="homeService" className="serviceItem skipFirst serviceItemRight">
                                <img src={serviceIconHome} />
                                <p>家庭保洁</p>
                            </div>
                        </Link>
                        <Link to="/nannyChoice">
                            <div id="nannyServiceDescription" className="serviceItem skipFirst serviceItemRight">
                                <img src={serviceIconNanny} />
                                <p>保姆服务</p>
                            </div>
                        </Link>
                        <Link to="/nannyServiceDescription">
                            <div id="maternityService" className="serviceItem skipFirst serviceItemRight">
                                <img className="newIcon" src={hotIcon} />
                                <img src={serviceIconMaternity} />
                                <p>母婴服务</p>
                            </div>
                        </Link>
                        <Link to="/maternityService">
                            <div id="ServiceNoteForHcook" className="serviceItem skipFirst">
                                <img src={serviceIconCook} />
                                <p>上门做饭</p>
                            </div>
                        </Link>
                        <Link to="/appliancesClear">
                            <div id="appliancesClear" className="serviceItem skipFirst serviceItemRight">
                                <img src={serviceIconWash} />
                                <p>家电清洗</p>
                            </div>
                        </Link>
                        <Link to="/fixService">
                            <div id="fixService" className="serviceItem skipFirst serviceItemRight">
                                <img className="newIcon" src={newIcon} />
                                <img src={serviceIconRepair} />
                                <p>家电维修</p>
                            </div>
                        </Link>
                        <Link to="/mobileFix">
                            <div id="mobileFix" className="serviceItem skipSecond serviceItemRight">
                                <img src={serviceIconPhone} />
                                <p>手机维修</p>
                            </div>
                        </Link>
                        <Link to="/officeService">
                            <div id="officeService" className="serviceItem skipFirst">
                                <img src={serviceIconOffice} />
                                <p>企业保洁</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Router>
        )
    }
}
class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <GuideMap />
                <SmallIcon />
                <ShowBanner />
                <ServiceItem />
                <GetRouter />
            </div>
        )
    }
}
export default class Home extends Component {
    render() {
        return (
            <App />
        )
    }
}


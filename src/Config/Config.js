/*
 * @Author: lixh 
 * @Date: 2018-01-16 14:31:33 
 * @Last Modified by: lixh
 * @Last Modified time: 2018-02-26 16:03:41
 */
/**
 * 全局配置文件
 */
let baseUrl,imgUrl,wechatUrl,isTest,peckerUrl,payUrl;
if (process.env.NODE_ENV === "production") { // 生产环境
    baseUrl = "https://service.jiazb.cn:6081/HomeAssistService/";
    imgUrl = "https://static.jiazb.cn:8081/";
    wechatUrl = "https://wechat.jiazb.cn/";
    isTest = 0; // 设置支付环境,支付宝支付时需要传递给后台此参赛,0为正式
    peckerUrl = "http://app.xiujiadian.com/jiazhengbang/or/order!order.action?"; //啄木鸟正式链接
    payUrl = "https://static.jiazb.cn:8081/alipay/";
} else { // 开发环境
    baseUrl = "https://uat.jiazb.cn:29080/HomeAssistService/";
    imgUrl = "https://uat.jiazb.cn:7080/";
    wechatUrl = "http://uat.jiazb.cn/7756";
    isTest = 1; // 设置支付环境,支付宝支付时需要传递给后台此参赛,1为测试
    peckerUrl = "http://test.xiujiadian.com/jiazhengbang/or/order!order.action?"; //啄木鸟测试链接
    payUrl = "https://uat.jiazb.cn:7080/alipay/";
}
// 取链接后?指定变量值
const GetQueryString = (key) => {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null
};
// 判断时间是否需要加零
const checkTime = (time) => (
    time < 10 ? "0" + time : time
);
/** 
 * 计算n天后的日期 
 * initDate：开始日期，默认为当天日期， 格式：yyyymmdd/yyyy-mm-dd 
 * days:天数 
 * flag：返回值， 年与日之间的分隔符， 默认为xxxx年xx月xx日格式 
 */
const getDateAfter = (initDate, days, flag) => {
    if (!days) {
        return initDate;
    }
    initDate = initDate.replace(/-/g, "");
    flag = $.trim(flag);
    let date;
    // 是否设置了起始日期  
    if (!$.trim(initDate)) { // 没有设置初始化日期，就默认为当前日期  
        date = new Date();
    } else {
        let year = initDate.substring(0, 4);
        let month = initDate.substring(4, 6);
        let day = initDate.substring(6, 8);
        date = new Date(year, month - 1, day); // 月份是从0开始的  
    }
    date.setDate(date.getDate() + days);
    let yearStr = date.getFullYear();
    let monthStr = ("0" + (date.getMonth() + 1)).slice(-2, 8); // 拼接2位数月份  
    let dayStr = ("0" + date.getDate()).slice(-2, 8); // 拼接2位数日期  
    let result = "";
    if (!flag) {
        result = yearStr + "年" + monthStr + "月" + dayStr + "日";
    } else {
        result = yearStr + flag + monthStr + flag + dayStr;
    }
    return result;
}
// 改变指定链接的参数值
const setUrlParam = (url, param, value) => {
    if (url.indexOf("?") != -1) {
        let p = new RegExp("(\\?|&" + param + ")=[^&]*");
        if (p.test(url)) {
            url = url.replace(p, "$1=" + value);
        } else {
            url = url + "&" + param + "=" + value;
        }
    } else {
        url = url + "?" + param + "=" + value;
    }
    return url;
};
// 判断浏览器系统
let ua = navigator.userAgent.toLowerCase();
let isWeixin = ua.indexOf("micromessenger") != -1;
let isQQ = ua.indexOf('mqqbrowser') != -1;
let isAndroid = ua.indexOf("android") != -1;
let isIos = (ua.indexOf("iphone") != -1) || (ua.indexOf("ipad") != -1);
// 获取页面宽度
let WindowWidth = document.documentElement.clientWidth;
// 获取当前页面链接
let thisUrl = window.location.href;
// 定义日期对象&获取当前日期
let myDate = new Date();
let nowYear = myDate.getFullYear();
let nowMon = checkTime(myDate.getMonth() + 1);
let nowDate = checkTime(myDate.getDate());
let nowTime = nowYear + "-" + nowMon + "-" + nowDate;
// 获取来源页面路径
let referrer = window.location.referrer;
// 定义缓存
let storage = window.localStorage;
// 获取token
let token = storage.getItem("token");
// 获取城市ID
let cityId = storage.getItem("cityId");
// 设置版本号，手机类型等公共参数
let appVersion = "1.97.03";
let phoneType = "Aliservice";



export default {baseUrl, imgUrl, GetQueryString, checkTime, getDateAfter, setUrlParam, WindowWidth, thisUrl, myDate, nowYear, nowMon, nowDate, nowTime}
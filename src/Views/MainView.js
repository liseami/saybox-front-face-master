import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import weixinlayer from "../static/weixinlayer.png"

// 检测游览器环境是否是微信
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (String(ua.match(/MicroMessenger/i)) === 'micromessenger') {
        return true; // 是微信端
    } else {
        return false;
    }
}

function MainView() {
     // 微信游览器中的浮层，提示用手机自带游览器打开
    const navigationBar = () => (isWeiXin() ? <div className=" h-0 w-0"></div> : <NavigationBar />)
    const weixinBlackLayer = () => (isWeiXin() ? <div className="absolute w-full h-screen top-0 bg-black opacity-30 ">
    </div> : <div className=" h-0 w-0"></div>)
    const weixinLayerImage = () => (isWeiXin() ? <img className=" absolute top-0" src={weixinlayer}></img> : <div className=" h-0 w-0"></div>)
    return (

        <main className="flex flex-col w-full sm:max-w-[1440px] items-center justify-center">
            {navigationBar()}
            <div className="h-20"></div>
            <Outlet />
            <Footer />
            {weixinBlackLayer()}
            {weixinLayerImage()}
        </main>
    )
}

export default MainView;
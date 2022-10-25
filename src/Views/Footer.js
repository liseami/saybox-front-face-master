import { Link } from "react-router-dom";
import WeixinQrcodePage from "./ContentUS/WeixinQrcodePage";
import QQPage from "./ContentUS/QQPage";
import logo from "../static/applogo.png"

function Footer() {

    return (
        <footer className="mt-0 w-full mx-auto px-6 pt-4 pb-8 bg-gray-50 text-black">

            <div className="flex flex-col py-8 space-y-12 border-b sm:flex-row sm:space-y-0 sm:justify-between sm:px-20">

                <img src={logo} className="w-20 h-20 rounded-3xl"></img>

                {/* 产品 */}
                <div className="text-sm space-y-2 text-black flex flex-col ">
                    <a className="text-base font-bold">产品</a>
                    <a >下载</a>
                    <Link to="/UserAgreement">用户协议</Link>
                    <Link to="/PrivacyAgreement">隐私政策</Link>
                </div>
                {/* 公司 */}
                <div className="text-sm space-y-2 text-black flex flex-col ">
                    <a className="text-base font-bold">公司</a>
                    <a href="https://www.liaoparty.com"target="_blank" rel="noopener noreferrer">苏州萌咪网络科技有限责任公司</a>
                    {/* <Link to="/WeixinQrcodePage">微信</Link>
                    <Link to="/QQPage">QQ群组</Link>
                    <a href="https://twitter.com/liseami1 "target="_blank" rel="noopener noreferrer">加入我们</a>
                    <a href="https://www.wired.com/story/web3-gavin-wood-interview"target="_blank" rel="noopener noreferrer">什么是Web3</a> */}
                </div>
                {/* 资质 */}
                {/* <div className="text-sm space-y-2 text-black flex flex-col ">
                    <a className="text-base font-bold">资质</a>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502047503" target="_blank" rel="noreferrer">沪公网安备31011502014153号</a>
                    <a href="http://beian.miit.gov.cn" className="mt-1.5" target="_blank" rel="noreferrer">沪ICP备19032288号-1</a>
                </div> */}
            </div>

            <div className="text-black/50 space-y-2 text-sm flex flex-col sm:flex-row justify-between  sm:items-start py-8 sm:space-y-0">
                <div className="flex flex-col space-y-2">
                    <a >Desgin and Developed in Wuhan，Hubei.</a>
                    <a >苏州萌咪网络科技有限责任公司</a>
                    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">苏ICP备2022028428号-2</a>
                </div>
                <a>版权所有 ©️2022 苏州萌咪网络科技有限责任公司.保留所有权利</a>
            </div>


        </footer>
    )
}

export default Footer;
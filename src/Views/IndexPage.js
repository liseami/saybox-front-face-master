
import { QRCodeSVG } from "qrcode.react";
import iphoneimage from "../static/iphone.png"

function IndexPage() {
    return (
        <div className="relative flex flex-col w-full justify-start items-center overflow-clip">
            
            <img src={iphoneimage} alt="无法显示图片" className="w-full sm:w-10/12"></img>

            <div className=" animate-fade-in-down flex flex-col space-y-4 px-6 w-full  sm:  items-center">
           
                <h1 className=" text-[40px] font-bold text-center sm:text-7xl">
                    <em className="text-transparent bg-clip-text bg-gradient-to-bl from-[#1DA1F2] via-[#A147FC] to-[#1DA1F2]">
                        Fastgo
                    </em>
                    光速启动
                </h1>
                <p className="px-4 text-black/50 font-normal text-sm text-center sm:text-xl">
                    Fastgo是一款帮助iOS用户从锁屏状态快速扫码、亮码的工具。
                </p>

                <div className="w-full sm:py-6 sm:flex sm:justify-center">
                    <div className=" 
                    pb-12 
                    flex flex-col space-y-4 
                    items-center 
                    sm:space-y-6
                    sm:pb-0
                    sm:bg-white/30 
                    sm:p-8
                    sm:my-4
                    sm:rounded-3xl  
                    sm:shadow-inner 
                    sm:backdrop-blur-md ">

                        {/* 移动端下载按钮 */}
                        <div className="pt-16 w-full sm:pt-0 sm:w-2/3  sm:hidden transition-all ">
                            <div className="flex rounded-2xl p-1 shadow-xl mx-auto bg-gradient-to-r  from-[#FC5753]/25 via-[#A147FC] to-[#79C5FC]/30 
                            sm:from-[#FC5753]/0 sm:via-[#A147FC]/0 sm:to-[#79C5FC]/0 sm:bg-black sm:rounded-full">
                                <button onClick={()=> window.open("https://apps.apple.com/cn/app/id1645818222", "_blank")} className="h-14 w-full rounded-xl  bg-black/90
                            sm:bg-black sm:rounded-full ">
                                    <span className=" text-white text-base font-bold ">
                                        下载
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* 网页端二维码 */}
                        <div className="hidden sm:flex sm:flex-row sm:space-x-10 transition-all">
                            <div>
                                <p className="text-2xl font-bold">扫描二维码<br></br>下载App</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <QRCodeSVG value="https://fastGo.liaoparty.com" className="hidden sm:block" />
                        </div>


                        {/* 版本要求 */}
                        <div className="italic  text-black/50 overflow-hidden justify-center w-full text-sm font-normal flex flex-row space-x-4
                    sm:text-black/80">
                            <span>v0.0.1</span>
                            <span className="text-black/30">|</span>
                            <span>苹果 iOS15+</span>
                            <span className="text-black/30">|</span>
                            <span>Android(开发中)</span>
                        </div>

                        {/* 使命、愿景 */}
                        <div className="py-12 hidden sm:block
                    sm:pt-6">
                            <div className="sm:p-1 sm:bg-gradient-to-r  sm:from-[#FC5753]/25 sm:via-[#A147FC] sm:to-[#79C5FC]/40 
                            sm:rounded-full">
                                <div className="flex flex-row items-center   space-x-2 justify-between  text-left text-sm  shadow-2xl bg-white/90 backdrop-blur-2xl rounded-xl border-solid border border-stone-200 px-4 py-5
                                sm:rounded-full">
                                     <a href="https://www.liaoparty.com"target="_blank" rel="noopener noreferrer">了解我们的使命、愿景、以及如何重新连接人与人。</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;
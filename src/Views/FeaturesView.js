

const features = [
    { color: "yellow", title: '瞬间镜头', subline: "使用无滤镜的瞬间镜头发布动态。", imgsrc: "//files.revome.cn/public/e0d8778a9b89628c0bf1757eba88a9cb_Features1.png" },
    { color: "yellow", title: '超级ID', subline: "超级ID注册通道现已开放。", imgsrc: "//files.revome.cn/public/e29306801d601b5b441b1d2b3b3e4b3b_Features2.png" },
    { color: "yellow", title: '朋友客厅', subline: "轻松开办线上朋友客厅，招待朋友。", imgsrc: "//files.revome.cn/public/4c618a20528ebe985f31521e6e249b87_Features3.png" },
]

function FeaturesView() {
    return (
        <div className="felx flex-col rounded-3xl bg-gray-50 ">
            <div className=" h-40 w-full rounded-3xl bg-gradient-to-b  from-[#A147FC]/10 to-white/0 "></div>

            <div className="  text-center  p-4 -mt-40">
                <div className=" space-y-12 mt-4 px-2 pt-4">
                    <p className="text-[#A147FC] text-base font-bold
                    sm:text-lg">版本功能摘要</p>
                    <p className="text-[#A147FC] text-3xl font-bold
                    sm:text-5xl sm:px-40">71%的用户是00后。23%的用户是90后。<em className="text-transparent bg-clip-text bg-gradient-to-bl from-[#A147FC] via-[#A147FC] to-[#A147FC]" >就是现在，</em>告别陈旧的场合。重构所需的一切。</p>
                    <p className="text-sm text-black/50
                    sm:px-40">
                        使用瞬间镜头，和真实的朋友在一起。你和朋友之间的滤镜，早就应该被清洗。传递Yolo精神。Yolo=You Only Live Once！一切感受只需你体验一次瞬间相机！</p>
                </div>

                <div className="space-y-4 my-12 flex flex-col  sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">

                    <div className=" text-left bg-white rounded-2xl p-6  space-y-4 shadow-xl shadow-gray-200/25">
                        <div className=" p-2 bg-[#FCB953]/10 rounded-xl w-min">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[#FCB953]" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="font-bold text-lg text-[#FCB953]">{features[0].title}</p>
                            <p>{features[0].subline}</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={features[0].imgsrc} className=" w-4/5 sm:mt-6" alt=""></img>
                        </div>
                    </div>

                    <div className=" text-left bg-white rounded-2xl p-6 space-y-4 shadow-xl shadow-gray-200/25">
                        <div className=" p-2 bg-[#474FFC]/20 rounded-xl w-min">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[#474FFC]" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="font-bold text-lg text-[#474FFC]">{features[1].title}</p>
                            <p>{features[1].subline}</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={features[1].imgsrc} className=" w-4/5" alt=""></img>
                        </div>
                    </div>


                    <div className=" text-left bg-white rounded-2xl p-6 space-y-4 shadow-xl shadow-gray-200/25">
                        <div className=" p-2 bg-[#FC5753]/20 rounded-xl w-min">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-[#FC5753]" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                        <div className="">
                            <p className="font-bold text-lg text-[#FC5753]">{features[2].title}</p>
                            <p>{features[2].subline}</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={features[2].imgsrc} className=" w-4/5"  alt=""></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FeaturesView;
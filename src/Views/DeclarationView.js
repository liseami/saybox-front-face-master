
function DeclarationView() {
    return (
        <div className="p-4 mx-6 space-y-2 bg-white py-6 pt-24 sm:py-40">

            {/* 标题 */}
            <p className="text-[#FC5753] sm:font-bold">Fantsy宣言</p>
            <p className=" text-3xl font-bold text-[#FC5753]
            sm:text-5xl sm:w-2/3">用户永远不能用现金来购买“客厅”中的家具。这是连接人与人的新方式，而非氪金游戏。</p>

            <div className="flex flex-col space-y-4 pt-6 sm:flex-row sm:space-y-0 sm:space-x-4 ">
                {/* 按钮 */}
                <div className="rounded-2xl ">
                    <button className="h-14 w-full rounded-xl text-center text-base content-center bg-[#FC5753] backdrop-blur-2xl
                    sm:px-12 sm:text-xl sm:h-16">
                        <span className=" text-white font-bold">
                            加入我们
                        </span>
                    </button>
                </div>
                {/* 意见反馈 */}
                <div className="rounded-2xl">
                    <button className="h-14 w-full rounded-xl text-center text-base content-center bg-[#FC5753]/20 backdrop-blur-2xl
                    sm:px-12 sm:text-xl sm:h-16">
                        <span className=" text-[#FC5753] font-bold">
                            意见反馈
                        </span>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DeclarationView;
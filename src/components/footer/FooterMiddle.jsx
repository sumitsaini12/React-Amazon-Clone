import { memo } from "react";
import { indianFlag, logo } from "../../assets";
import { MiddleList } from "../../data/FooterMiddleList";
import FooterMiddleList from "./FooterMiddleList";


const FooterMiddle = () => {
    return (
        <>
            <div className="w-full bg-amazon_light text-white">
                <div className="w-full border-t-[1px] border-gray-500 py-10">
                    <div className="max-w-5xl text-gray-300 mx-auto">
                        <div className="w-full grid grid-cols-4 place-items-center items-start">
                            {/* ======Middle List Data.======= */}
                            {/* <FooterMiddleList /> */}
                            {
                                MiddleList.map((item) => (
                                    <FooterMiddleList key={item.id} title={item.title} listItem={item.listItems} />
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className="w-full flex justify-center items-center gap-6 py-6">
                    <div>
                        <img className="w-20 pt-3" src={logo} alt="" />
                    </div>
                    <div className="flex gap-2">
                        <p className="flex gap-1 justify-center items-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">English</p>
                    </div>
                    <div className="flex gap-1 justify-center items-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
                        <img className="w-5" src={indianFlag} alt="indianFlag" />
                        <p>India</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(FooterMiddle)

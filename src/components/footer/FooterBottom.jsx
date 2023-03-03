import { memo } from "react";
import { BottomList } from "../../data/FooterList";


const FooterBottom = () => {
    return (
        <>
            <div className="w-full bg-footerBottom py-8">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-7 gap-3 place-content-center text-gray-400">
                        {
                            BottomList.map((item) => (
                                <div className="group cursor-pointer" key={item.id}>
                                    <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] loading-3 mb-[2px]">{item.title}</h3>
                                    <p className="w-20 tracking-tight text-[12px] text-[#999] group-hover:underline loading-3">{item.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
                        <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Conditions of Use</li>
                        <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Privacy Notice</li>
                        <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">Your Ads Privacy Choices</li>
                    </ul>
                    <div>
                        <p className="font-normal text-[12px] text-[#DDD] leading-3">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>

        </>
    )
};

export default (FooterBottom);


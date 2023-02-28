import { memo } from "react";
import { BottomList } from "../../data/FooterList";


const FooterBottom = () => {
    return (
        <>
            <div className="w-full bg-footerBottom py-8">
                <div className="max-w-5xl mx-auto">
                    <div className="w-full grid grid-cols-7 gap-3 place-content-center text-gray-400">
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
            </div>

        </>
    )
};

export default (FooterBottom);

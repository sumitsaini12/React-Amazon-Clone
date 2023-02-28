import { memo } from "react";
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
            </div>
        </>
    )
};

export default memo(FooterMiddle);

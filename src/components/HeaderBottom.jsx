import { memo, useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Sidebar from "./Sidebar";



function HeaderBottom() {

    const [sidebar, setSidebar] = useState(false);


    return (
        <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
            {/* ======ListItems========= */}
            <ul className="flex items-center gap-2 text-sm tracking-wide">
                <li onClick={() => setSidebar(true)} className="headerHover"><FiMenu className="text-white w-5 h-5 mr-1" /> All</li>
                <li className="headerHover">Today's Deals</li>
                <li className="headerHover">Customer Service</li>
                <li className="headerHover">Gift Cards</li>
                <li className="headerHover">Registry</li>
                <li className="headerHover">Sell</li>
            </ul>

            {/* ======Sidebar====== */}
            {
                sidebar && (
                    <div >
                        <Sidebar />
                        <span onClick={() => setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                            <MdClose className="w-6 h-6" />
                        </span>
                    </div>
                )
            }

        </div>
    );
}
export default memo(HeaderBottom)

import { memo, useState, useRef, useEffect } from "react";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";


function HeaderBottom() {

    const [sidebar, setSidebar] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSidebar(false);
            }
        })
    }, [])

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
                    <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
                        <div className="w-full h-full relative">
                            <motion.div initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} ref={ref} className="w-[350px] h-full bg-white border border-black">
                                <Sidebar />
                                <span onClick={() => setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                                    <MdClose className="w-6 h-6" />
                                </span>
                            </motion.div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
export default memo(HeaderBottom)

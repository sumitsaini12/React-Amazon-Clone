import { memo, useState } from "react";
import { logo } from "../../assets/index";
import { GoLocation } from 'react-icons/go';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdCart } from 'react-icons/io';
import { allItems } from "../../data/searchItems";
import HeaderBottom from "./HeaderBottom";

function Header() {

    const [showAll, setShowAll] = useState(false);

    const onShowChange = () => setShowAll(!showAll);



    return (
        <div className="w-full sticky top-0 z-50">
            <div className="bg-amazon_blue mx-auto  text-white px-4 py-3 flex items-center gap-4">
                {/* ======Img====== */}
                <div className="headerHover">
                    <img className="w-24 mt-2" src={logo} alt="logo" />
                </div>
                {/* ======Location====== */}
                <div className="headerHover">
                    <GoLocation className="text-white" />
                    <p className="text-sm ml-1 text-lightText font-light flex flex-col">Deliver to <span className="text-sm font-semibold text-white -mt-1"> India</span></p>
                </div>
                {/* ======Searching====== */}
                <div className="h-10 rounded-md flex flex-grow relative">
                    <span onClick={onShowChange} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
                        All {" "} <span>
                            <IoMdArrowDropdown className="w-5 h-5" />
                        </span>
                        {
                            showAll && (
                                <div>
                                    <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">

                                        {
                                            allItems.map((item) => {
                                                return (
                                                    <li key={item.id} className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">{item.title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </span>
                    <input
                        className="px-2 h-full text-base text-amazon_blue flex-grow outline-none border-none "
                        type="text"
                    />
                    <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a047] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                        <BiSearchAlt2 />
                    </span>
                </div>

                {/* ======Sign in====== */}
                <div className="flex flex-col items-start justify-center headerHover">
                    <p className="text-xs font-light text-lightText">Hello, Sign in</p>
                    <p className="flex text-sm font-semibold text-whiteText -mt-1">Accounts & Lists {" "}<span><IoMdArrowDropdown className="mt-1 ml-2 w-5 h-5" /></span></p>
                </div>

                {/* ======Order====== */}
                <div className="flex flex-col items-start justify-center headerHover">
                    <p className="text-xs font-light text-lightText">Returns</p>
                    <p className="text-sm font-semibold text-whiteText -mt-1">& Orders</p>
                </div>

                {/* ======Cart====== */}
                <div className="flex flex-col items-start justify-center headerHover relative">
                    <IoMdCart className="w-6 h-6" />
                    <p className="text-xs font-semibold ml-5 -mt-3 text-whiteText">
                        Cart<span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">0</span>
                    </p>
                </div>
            </div>
            <HeaderBottom />
        </div>
    );
}
export default memo(Header)

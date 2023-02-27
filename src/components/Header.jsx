import { memo } from "react";
import { logo } from "../assets/index";
import { GoLocation } from 'react-icons/go';
import { IoMdArrowDropdown } from 'react-icons/io';

function Header() {
    return (
        <>
            <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
                <div className="headerHover">
                    <img className="w-24 mt-2" src={logo} alt="logo" />
                </div>
                <div className="headerHover">
                    <GoLocation className="text-white" />
                    <p className="text-sm text-lightText font-light flex flex-col">Deliver to <span className="text-sm font-semibold text-whiteText -mt-1">Oman</span></p>
                </div>
                <div className="h-10 rounded-md flex flex-grow relative">
                    <span>All<span><IoMdArrowDropdown /></span></span>
                </div>
            </div>
        </>
    );
}
export default memo(Header)

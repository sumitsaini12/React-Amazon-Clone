import { memo } from "react";
import SidebarButton from "./SidebarButton";
import { RiAccountCircleFill } from 'react-icons/ri';
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
    return (
        <>
            <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon-blue bg-opacity-50">
                <div className="w-full h-full relative">
                    <div className="w-[350px] h-full bg-white border border-black">
                        <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                            <RiAccountCircleFill className="w-6 h-6" />
                            <h3 className="font-titleFont text-lg font-bold tracking-wide">Hello, Sign In</h3>
                        </div>

                        <SidebarContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore" />
                        <SidebarContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home" />
                        <SidebarContent title="Shop By Department" one="Gift Cards" two="Amazon live" three="International Shopping" />
                        <SidebarContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact us" />

                    </div>
                </div>
            </div>
        </>
    )
};

export default memo(Sidebar);
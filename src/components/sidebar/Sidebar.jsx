import { memo } from "react";
import { RiAccountCircleFill } from 'react-icons/ri';
import SidebarContent from "./SidebarContent";


const Sidebar = () => {
    return (
        <>

         
                <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                    <RiAccountCircleFill className="w-6 h-6" />
                    <h3 className="font-titleFont text-lg font-bold tracking-wide">Hello, Sign In</h3>
                </div>

                <SidebarContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore" />
                <SidebarContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home" />
                <SidebarContent title="Shop By Department" one="Gift Cards" two="Amazon live" three="International Shopping" />
                <SidebarContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact us" />

           

        </>
    )
};

export default memo(Sidebar);
import { memo } from "react";
import { GrFormNext } from 'react-icons/gr';


const SidebarButton = ({ children }) => {
    return (
        <>
            <li className="flex items-center justify-between hover:bg-zinc-200 py-2 px-6 cursor-pointer">{children}<span><GrFormNext className="w-5 h-6" /></span></li>
        </>
    )
};

export default memo(SidebarButton);
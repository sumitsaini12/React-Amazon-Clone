import { memo } from "react";
import SidebarButton from "./SidebarButton";

const SidebarContent = ({ title, one, two, three }) => {
    return (
        <>
            <div className="py-3 border-b-[1px] border-b-gray-300">
                <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">{title}</h3>
                <ul className="text-sm">
                    {one && <SidebarButton>{one}</SidebarButton>}
                    {two && <SidebarButton>{two}</SidebarButton>}
                    {three && <SidebarButton>{three}</SidebarButton>}
                </ul>
            </div>

        </>
    )
};

export default memo(SidebarContent)
import { memo } from "react";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";


const Footer = () => {
    return (
        <div className="font-titleFont">
            <FooterTop />
            <FooterMiddle />
        </div>
    )
};

export default memo(Footer)

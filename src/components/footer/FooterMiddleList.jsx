import { memo } from "react";


const FooterMiddleList = ({ title, listItem }) => {
    return (
        <>
            <div className="w-full">
                <h3 className="font-titleFont text-white text-base font-semibold mb-3">{title}</h3>
                <ul className="font-bodyFont flex flex-col gap-2">
                    {
                        listItem.map((item) =>
                            item.listData.map((data, i) =>
                                <li className="footerLink" key={i}>{data}</li>
                            ))
                    }
                </ul>
            </div>
        </>
    )
};

export default FooterMiddleList
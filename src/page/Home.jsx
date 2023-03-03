import { memo } from "react";
import Banner from "../components/home/Banner";
import Products from "../components/products/Products";


const Home = () => {
    return (
        <div className="font-bodyFont bg-gray-100">
            <Banner />
            <div className="w-full -mt-10 xl:-mt-36 xl:py-10">
                <Products />
            </div>

        </div>
    )
};

export default memo(Home);
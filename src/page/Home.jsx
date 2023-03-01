import { memo } from "react";
import Banner from "../components/home/Banner";
import Products from "../components/products/Products";


const Home = () => {
    return (
        <>
            <Banner />
            <div className="w-full -mt-28">
                <Products />
            </div>

        </>
    )
};

export default memo(Home);
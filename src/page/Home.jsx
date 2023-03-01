import { memo } from "react";
import Banner from "../components/home/Banner";
import Products from "../components/products/Products";


const Home = () => {
    return (
        <>
            <Banner />
            <Products />
        </>
    )
};

export default memo(Home);
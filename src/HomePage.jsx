import { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";



const HomePage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default memo(HomePage)
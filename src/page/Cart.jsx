import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/amazonSlice";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.amazon.products);


    const [totalPrice, setTotalPrice] = useState("")

    useEffect(() => {
        let Total = 0;
        products.map((item) => {
            Total += item.price * item.quantity;
            return setTotalPrice(Total.toFixed(2));
        })
    }, [products])


    return (
        <>
            <div className="w-full bg-gray-100 p-4">
                {
                    products.length > 0 ? (<div className="container mx-auto h-auto grid grid-cols-5 gap-8">
                        <div className="w-full h-full bg-white px-4 col-span-4">
                            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                                <h2 className="text-3xl font-medium">Shopping Cart</h2>
                                <h4 className="text-xl font-normal">Subtotal</h4>
                            </div>
                            {/* =======Product Start here ======= */}

                            <div>
                                {
                                    products.map((item) => (
                                        <div key={item.id} className="w-full border-b-[1px] border-b-gray-300 p-4 md:p-0 md:py-4 flex items-center gap-6">
                                            <div className="w-full flex flex-col md:flex-row items-center gap-6">
                                                <div className="w-full md:w-2/5 xl:w-1/5">
                                                    <img className="w-full h-44 object-contain" src={item.image} alt="productImg" />
                                                </div>
                                                <div className="w-full flex flex-col gap-2 xl:gap-1">
                                                    <h2 className="font-semibold text-lg">{item.title}</h2>
                                                    <p className="xl:pr-10 text-sm">{item.description.substring(0, 200)}...</p>
                                                    <p className="text-base">Price <span className="font-semibold">${item.price}</span></p>
                                                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                                                        <p className="text-base font-normal">Qty:</p>
                                                        <p onClick={() => dispatch(decrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300">-</p>
                                                        <p className="font-titleFont text-base font-semibold text-amazon_blue">{item.quantity}</p>
                                                        <p onClick={() => dispatch(incrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300">+</p>
                                                    </div>
                                                    <botton onClick={() => dispatch(deleteItem(item.id))} className="bg-red-500 cursor-pointer w-36 py-1 rounded-lg text-white mt-2 text-center hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</botton>
                                                </div>
                                                <div>
                                                    <p className="tex-lg font-titleFont font-semibold">${item.price * item.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="w-full py-4">
                                <button onClick={() => dispatch(resetCart())} className="px-10 py-2 cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">Clear Cart</button>
                            </div>

                        </div>

                        {/* ==========Total Price Cart========= */}
                        <div className="w-full h-52 bg-white col-span-1 flex flex-col items-center justify-center p-4 gap-1">
                            <div>
                                <p className="flex items-start gap-2 text-sm">
                                    <span><IoIosCheckmarkCircle className="w-7 h-7 text-green-500" /></span>
                                    Your order qualifies for FREE Shipping Choose this option at checkout. See details....
                                </p>
                            </div>
                            <div>
                                <p className="font-medium px-10 py-1 flex items-center justify-between gap-6">Total:<span className="text-lg font-bold"> ${totalPrice}</span></p>
                            </div>
                            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 cursor-pointer to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md px-3">Proceed to Buy</button>
                        </div>
                    </div>) : (
                        <motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="flex justify-center items-center gap-4 py-10">
                            <div>
                                <img className="w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="emptyCart" />
                            </div>
                            <div className="w-96 p-4 bg-white flex flex-col item-center shodow-lg rounded-md">
                                <h1 className="font-titleFont text-xl font-bold text-center">Your Cart feels lonely.</h1>
                                <p className="text-sm text-center">Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
                                <Link to="/">
                                    <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer px-8 py-2 hover:bg-yellow-500 active:bg-yellow-700 text-lg font-semibold font-titleFont">Containue Shopping</button></Link>
                            </div>
                        </motion.div>
                    )
                }




            </div>
        </>
    )
};

export default memo(Cart)


import axios from "axios";
import { memo, useEffect, useState } from "react";
import { productsData } from "../../api/Api";
import { RiStarSFill } from 'react-icons/ri';
import { MdApi } from 'react-icons/md';
import { IoMdCart, IoMdHeart, } from 'react-icons/io';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = productsData();
        data.then((response) => {
            setProducts(response.data);
        })
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  xl:gap-10 p-4">
            {
                products.map((item) => (
                    <div key={item.id} className="bg-white h-auto border-[1px] border-gray-200 py-8 z-3 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 flex flex-col gap-4 relative">
                        <span className="text-xs capitalize italic absolute tap-2 right-2 text-gray-500 -mt-6">{item.category}</span>
                        <div className="w-full h-auto flex items-centen justify-center px-4 relative group">
                            <img className="w-52 h-64 object-contain" src={item.image} alt="ProductImg" />
                            <ul className="w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2  border-1 border-r group-hover:bottom-0 duration-700">
                                <li className="productLi">Compare{" "}<span><MdApi className="w-6 h-6" /></span></li>
                                <li className="productLi">Add to Cart{" "}<span><IoMdCart className="w-6 h-6" /></span></li>
                                <li className="productLi">View Details{" "}<span><FaArrowCircleRight className="w-5 h-5" /></span></li>
                                <li className="productLi">Add to Wish List{" "}<span><IoMdHeart className="w-6 h-6" /></span></li>
                            </ul>
                        </div>
                        <div className="px-4 z-10 bg-white">
                            <div className="flex items-center justify-between">
                                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{item.title.substring(0, 20)}</h2>
                                <p className="text-sm font-semibold text-gray-600">${item.price}</p>
                            </div>
                            <div>
                                <p className="text-sm font-base">{item.description.substring(0, 80)}...</p>
                                <div className="flex text-yellow-500">
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                </div>
                            </div>
                            <button onClick={() => dispatch(addToCart({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                                category: item.category,
                                description: item.description,
                                image: item.image,
                                quantity: 1,

                            }))} className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div >
    )
};

export default memo(Products)
import axios from "axios";
import { memo, useEffect, useState } from "react";
import { productsData } from "../../api/Api";
import { RiStarSFill } from 'react-icons/ri';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = productsData();
        data.then((response) => {
            setProducts(response.data);
        })
    }, [])


    console.log("this is products data", products);

    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10">
            {
                products.map((item) => (
                    <div key={item.id} className="bg-white h-auto border-[1px] border-gray-200 py-6 z-3 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 flex flex-col gap-4 relative ">
                        <div className="w-full h-auto flex items-centen justify-center px-4">
                            <img className="w-52 h-64 object-contain" src={item.image} alt="ProductImg" />
                        </div>
                        <div className="px-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{item.title.substring(0, 20)}</h2>
                                <p className="text-sm font-semibold text-gray-600">${item.price}</p>
                            </div>
                            <div>
                                <p className="text-sm">{item.description.substring(0, 100)}...</p>
                                <div className="flex text-yellow-500">
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                    <RiStarSFill className="w-7 h-7" />
                                </div>
                            </div>
                            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default memo(Products)
import { memo } from "react";


const FooterTop = () => {
    return (
        <div className="w-full bg-white py-6">
            <div className="w-full border-t-[1px] border-b-[1px] py-8">
                <div className="w-64 mx-auto text-center flex flex-col gap-1">
                    <p className="text-sm">See personalized recommendation</p>
                    <button className="w-full bg-yellow-400 py-1 rounded-md font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">Sign In</button>
                    <p className="text-sm mt-1">New Customber?
                        <span className="text-blue-400">Strat here.</span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default (FooterTop);

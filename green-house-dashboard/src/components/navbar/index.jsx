import React from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"

const Navbar = (props) => {
    const { onOpenSidenav } = props
    return (
       <nav className="sticky top-4 rounded-xl z-40 flex flex-row flex-wrap justify-center bg-primary rounded-xl">
        <div className="mr-auto m-5">
            <a className="text-sm font-normal hover:underline mr-auto">
                Pages
                <span>
                    {" "}
                    /{" "}
                </span>
            </a>
            <Link
                className="text-sm font-normal capitalize hover:underline"
                to="#"
            >
                {`Main Dashboard`}
            </Link>

            <p className="text-[30px]">
                <Link
                    to="#"
                    className="font-bold capitalize"
                >
                    {`Main DashBoard`}
                    
                </Link>
            </p>
        </div>

        <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center 
        justify-around gap-2  px-2 py-2 shadow-xl shadow-shadow-500 
         md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2 xl:mt-[20px]">
            {/*<div className="flex h-full items-center rounded-full ">
                <p className="pl-3 pr-2 text-xl">
                    <FiSearch  className="h-4 w-4 text-gray-400"/>*
                </p>
                {/*<input
                    type="text"
                    placeholder="search..."
                    className="block h-full w-full rounded-full lightPrimary text-sm font-medium"
                /> 
            </div> */}
            <span
                className="flex cursor-pointer text-x1 xl:hidden mt-[-200px] ml-[300px]"
                onClick={onOpenSidenav}
            >
                <FiAlignJustify className="h-5 w-5"/>

            </span>
        </div>        
       </nav>
    )
}

export default Navbar
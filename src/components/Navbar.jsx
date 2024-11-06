import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
   return (
      <div className="w-full bg-Cblack">
         <div className="flex justify-between items-center mx-2 py-2">
            <div className="flex gap-2 items-center">
               <img className="w-9 " src={logo} alt="" />
               <div className="text-white ">
                  <h2 className="text-xl font-semibold">
                     Untitled <i className="fa-solid fa-pencil text-[15px]"></i>
                     <span className="font-normal text-xs -pt-10 block text-gray-200">
                        Captain Anonymous
                     </span>
                  </h2>
               </div>
            </div>

            <div className="flex items-center gap-3 text-white">
               <button className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73] nav-btn">
                  <i className="fa-solid fa-cloud mr-1"></i>Save
               </button>
               <button className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73] nav-btn">
                  <i className="fa-solid fa-gear mr-1"></i> Settings
               </button>
               <button className="bg-green-400 text-black py-2 px-5 rounded-md hover:bg-green-600 hover:text-white">
                  Sign Up
               </button>
               <button className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73]">
                  Log In
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;

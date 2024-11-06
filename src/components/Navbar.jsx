import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
   const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
   const [isCreatingAccount, setCreatingAccount] = useState(false); // New state for toggling between login and sign-up

   // Function to handle opening the login popup
   const openLoginPopup = () => {
      setLoginPopupOpen(true);
   };

   // Function to handle closing the login popup
   const closeLoginPopup = () => {
      setLoginPopupOpen(false);
      setCreatingAccount(false); // Reset to login view when closing
   };

   const submitButton = (e) => {
      e.preventDefault();
   };

   return (
      <div className="w-full bg-Cblack">
         <div className="flex justify-between items-center mx-2 py-2">
            <div className="flex gap-2 items-center">
               <img className="w-9" src={logo} alt="Logo" />
               <div className="text-white">
                  <h2 className="text-xl font-semibold">
                     Untitled <i className="fa-solid fa-pencil text-[15px]"></i>
                     <span className="font-normal text-xs -pt-10 block text-gray-200">
                        Captain Anonymous
                     </span>
                  </h2>
               </div>
            </div>

            <div className="flex items-center gap-3 text-white">
               <button
                  className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73] nav-btn"
                  onClick={openLoginPopup} // Open login popup when clicked
               >
                  <i className="fa-solid fa-cloud mr-1"></i>Save
               </button>
               <button
                  onClick={openLoginPopup}
                  className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73] nav-btn"
               >
                  <i className="fa-solid fa-gear mr-1"></i> Settings
               </button>
               <button
                  onClick={openLoginPopup}
                  className="bg-green-400 text-black py-2 px-5 rounded-md hover:bg-green-600 hover:text-white"
               >
                  Sign Up
               </button>
               <button
                  onClick={openLoginPopup}
                  className="bg-[#4c5061] py-2 px-5 rounded-md hover:bg-[#5A5F73]"
               >
                  Log In
               </button>
            </div>
         </div>

         {/* Login Popup */}
         {isLoginPopupOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
               <div className="md:w-[35%] m-auto bg-green-400 rounded-lg shadow-lg w-[90%]">
                  <div className="bg-white mt-2 w-full pb-10 rounded-lg relative">
                     <i
                        onClick={closeLoginPopup}
                        className="fa-solid fa-xmark text-3xl absolute right-5 top-3 text-[#63687b] hover:text-black cursor-pointer"
                     ></i>
                     <div className="w-[85%] m-auto">
                        <h2 className="text-4xl font-black text-[#444857] text-center pt-10">
                           {isCreatingAccount ? "Create Account" : "Hold up!"}
                        </h2>
                        <p className="text-md text-center text-[#444857] mt-3">
                           {isCreatingAccount
                              ? "Sign up to save and manage your work."
                              : "You’ll have to Log In or Sign Up (for free!) to save your Pen. Don’t worry! All your work will be saved to your account."}
                        </p>
                     </div>

                     <form
                        className="w-[85%] m-auto mt-16"
                        onSubmit={submitButton}
                     >
                        {isCreatingAccount && (
                           <>
                              <div className="flex flex-col">
                                 <label className="text-sm font-semibold text-[#444857] mb-1">
                                    Name
                                 </label>
                                 <input
                                    type="text"
                                    className="bg-[#EAEBEE] p-2"
                                 />
                              </div>

                              <div className="flex flex-col mt-7">
                                 <label className="text-sm font-semibold text-[#444857] mb-1">
                                    Choose a username
                                 </label>
                                 <input
                                    type="text"
                                    className="bg-[#EAEBEE] p-2"
                                 />
                              </div>
                           </>
                        )}

                        <div className="flex flex-col mt-7">
                           <label className="text-sm font-semibold text-[#444857] mb-1">
                              Email
                           </label>
                           <input type="text" className="bg-[#EAEBEE] p-2" />
                        </div>

                        <div className="flex flex-col mt-7">
                           <label className="text-sm font-semibold text-[#444857] mb-1">
                              Password
                           </label>
                           <input
                              type="password"
                              className="bg-[#EAEBEE] p-2"
                           />
                        </div>

                        <button
                           type="submit"
                           className="bg-green-400 w-full mt-6 rounded-sm py-2 hover:bg-green-600 hover:text-white"
                        >
                           {isCreatingAccount ? "Sign Up" : "Log In"}
                        </button>

                        {!isCreatingAccount && (
                           <a href="#">
                              <p className="text-center mt-5 text-sm hover:text-blue-500">
                                 Forgot Password?
                              </p>
                           </a>
                        )}
                     </form>

                     <hr className="mt-10" />
                     <p
                        onClick={() => setCreatingAccount(!isCreatingAccount)}
                        className="text-center text-sm mt-8 cursor-pointer"
                     >
                        {isCreatingAccount
                           ? "Already have an account? "
                           : "Need to create an account? "}
                        <span className="text-blue-500">
                           {isCreatingAccount ? "Log In" : ""}
                        </span>
                        <span className="text-blue-500">
                           {isCreatingAccount ? "" : "Sign Up for CodePen"}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Navbar;

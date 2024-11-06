import React from "react";
import "./Loader.css";

const Loader = () => {
   return (
      <div>
         <div className="loader">
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <br />
         </div>
         <h1 className="text-center mt-5 text-xl w-[90%] font-semibold">
            This Code Editor is{" "}
            <span className="text-red-500">
               not supported on mobile or tablet devices.
            </span>{" "}
            Please open on a laptop.
         </h1>
      </div>
   );
};

export default Loader;

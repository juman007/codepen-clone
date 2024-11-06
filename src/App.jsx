import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Loader from "../src/components/Loader/Loader.jsx";

const App = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // Function to check screen size and set loading state
      const handleResize = () => {
         if (window.innerWidth <= 780) {
            setLoading(true);
         } else {
            setLoading(false);
         }
      };

      // Initial check
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return (
      <>
         {loading ? (
            <div className="flex  justify-center items-center h-screen">
               <Loader />
            </div>
         ) : (
            <Home />
         )}
      </>
   );
};

export default App;

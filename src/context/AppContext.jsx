import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
   const [html, setHtml] = useState("");
   const [css, setCss] = useState("");
   const [js, setJs] = useState("");

   const value = {
      html,
      setHtml,
      css,
      setCss,
      js,
      setJs,
   };

   return (
      <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
   );
};

export default AppContextProvider;

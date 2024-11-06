import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
   const [html, setHtml] = useState(`<html>
<head></head>
<body>
    <h1>Welcome!</h1>
    <p>This is a simple HTML template.</p>
</body>
</html>
`);
   const [css, setCss] = useState(`*{
margin:0
padding:0;}

h1{
color: red;
font-size: 60px;
}`);
   const [js, setJs] = useState();

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

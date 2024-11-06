import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
   const { html, css, js } = useContext(AppContext);
   const [src, setSrc] = useState();

   const srcCode = `
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>`;

   useEffect(() => {
      const timeout = setTimeout(() => {
         setSrc(srcCode);
      }, 1000);
      return () => clearTimeout(timeout);
   }, [html, css, js]);

   return (
      <div className="h-screen">
         <iframe
            srcDoc={src}
            title="Output"
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
         ></iframe>
      </div>
   );
};

export default Result;

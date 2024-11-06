import React, { useContext } from "react";
import Editor from "./Editor";
import { AppContext } from "../context/AppContext";

const Code = () => {
   const { html, setHtml, css, setCss, js, setJs } = useContext(AppContext);
   return (
      <div className="flex flex-row w-full bg-black gap-3">
         <Editor
            language={"HTML"}
            value={html}
            onChange={setHtml}
            icon={<i className="fa-brands fa-html5 text-red-500"></i>}
         />
         <Editor
            language={"CSS"}
            value={css}
            onChange={setCss}
            icon={<i className="fa-brands fa-css3-alt text-blue-500"></i>}
         />
         <Editor
            language={"JS"}
            value={js}
            onChange={setJs}
            icon={<i className="fa-brands fa-js text-yellow-500"></i>}
         />
      </div>
   );
};

export default Code;

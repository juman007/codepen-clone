import React from "react";
import { Controlled as Controlleditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Editor = ({ language, icon, value, onChange }) => {
   const handleChange = (editor, data, value) => {
      onChange(value);
   };
   return (
      <div className="w-full bg-black h-[52vh]">
         <div className="h-[50vh] w-full border border-[#464650] overflow-hidden">
            <div className="flex flex-row">
               <div className="bg-[#1d1e22] text-white px-3 py-1">
                  {icon} {language}
               </div>
               <div className="flex-1 bg-black text-white flex justify-end items-center pr-3">
                  <i className="fa-sharp fa-solid fa-expand cursor-pointer"></i>
               </div>
            </div>
            <Controlleditor
               className="Controlled-editor"
               value={value}
               onBeforeChange={handleChange}
               options={{
                  theme: "material",
                  lineNumbers: true,
               }}
            />
         </div>
      </div>
   );
};

export default Editor;

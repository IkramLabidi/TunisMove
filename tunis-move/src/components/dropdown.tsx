import { useState } from "react";
import type {ReactNode} from "react";
import { IoIosArrowDown ,  IoIosArrowUp } from "react-icons/io";

type DropDownProps={
    options: string[];
    defaultLabel:string;
    icon: ReactNode;
    onChange? : (val : string)=>void;
};


export function DropDown({options, defaultLabel, icon , onChange}: DropDownProps){

    const[ isOpen, setIsOpen]= useState(false);
    const [isSelected, setIsSelected]= useState(defaultLabel);

    const handleSelect=(option: string)=>{
        setIsSelected(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option); 
          }
    };

    return (
    <div>
        <span className="flex items-center gap-5 border rounded-2xl px-7  py-2 "
        onClick={()=>{setIsOpen(!isOpen)}}>
            {icon}
            <span >{isSelected}</span>
            {isOpen ? <IoIosArrowUp/>: <IoIosArrowDown />}
         </span> 

         {isOpen && (
        <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-xl border z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
)
};
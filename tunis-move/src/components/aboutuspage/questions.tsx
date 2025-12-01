import {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type QuestionsProps={
    question : string;
    answer: String;
}

export function QuestionCard({question , answer}: QuestionsProps){
    const [isOpen , setIsOpen]= useState(false);
    return(
        <div className="flex flex-col gap-3">
            <button className="w-250 flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen) }
            >
                <span>{question}</span>
                <span className="hover: cursor-pointer">{isOpen? <IoIosArrowUp />: <IoIosArrowDown />}</span>
            </button>
            {isOpen && <p className=" text-gray-600 ">{answer}</p>}
    </div>)}
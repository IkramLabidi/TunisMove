import { FaRegClock } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { TbRoad } from "react-icons/tb";
import { useNavigate } from "react-router";
import type {TransportChoisesProps} from "./props"

export function TransportChoisesCards({icon,text,description,time,price, availability , quality, RoadDetails,Stops } : TransportChoisesProps){
    const navigate= useNavigate();
    return(
        <div className="w-150 h-110 border p-5 rounded-2xl flex flex-col gap-10 mt-5 items-center bg-white ">
            <div className="flex gap-5 items-center">
                {icon}
                <div className="flex flex-col ">
                    <span className="font-bold">{text}</span>
                    <span>{description}</span>
                </div>
            </div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10">
                <div className="flex gap-5 items-center">
                <FaRegClock size={20} className="text-blue-400" />
                <span>{time}</span>
            </div>
            <div className="flex gap-5 items-center">
                <FaDollarSign size={20} className="text-green-400"/>
                <span>{price}</span>
            </div >
            </div >
            <div className="flex gap-5">
                 <div className="flex gap-5 items-center ">
                <IoMdPeople size={20} className="text-purple-400" />
                <span>{availability}</span>
            </div>
            <div className="flex gap-5 items-center">
                <TbRoad size={20} className="text-red-400" />
                <span>{quality}</span>
            </div>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <span className="font-bold">Route Details</span>
                <span>{RoadDetails}</span>
            </div>
            <div className="flex flex-col gap-2 ">
                <span className="font-bold">Stops</span>
                <span >{Stops}</span>
            </div>
        </div>
        <button
        onClick={()=> navigate("/road")}
        className="border rounded-2xl w-120 p-2 bg-black text-white hover:cursor-pointer">Book This Route</button>
    </div>
    )
}
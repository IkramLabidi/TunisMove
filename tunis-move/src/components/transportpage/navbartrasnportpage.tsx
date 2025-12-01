import { FaArrowLeft } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { DropDown } from "../dropdown";
import { useNavigate } from "react-router";

export function NavBarTransportPage(){
    const navigate= useNavigate()
    return(
        <div className="flex bg-white h-16 justify-between items-center px-6 py-4 shadow-sm border-b border-gray-100">
            <div>
                <button
                onClick={()=> navigate("/")}
                className="flex gap-3 items-center hover:cursor-pointer group transition-all duration-200 hover:bg-gray-50 px-3 py-2 rounded-lg">
                    <FaArrowLeft size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors"/>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">Back to Search</span>
                </button>
            </div>
            <div className="flex gap-4">
                <DropDown
                icon={<CiFilter size={18} className="text-gray-500" />}
                options={["All Transport", "Bus", "Train", "Taxi"]}
                defaultLabel="All Transport"/>
                <DropDown
                icon={<CiFilter size={18} className="text-gray-500" />}
                options={["Duration", "Price"]}
                defaultLabel="Duration"/>
            </div>
        </div>
    )
}
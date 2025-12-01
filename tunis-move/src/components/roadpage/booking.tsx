import { useNavigate } from "react-router"
import { RoadOverview } from "./roadoverview";
import { FiPhone } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

export function Booking(){
    const navigate= useNavigate();
    return(
        <div className="flex items-center gap-5">
                    <div className="flex flex-col items-center gap-4 p-10 border rounded-2xl bg-white w-200 border-gray-400 npm">
                        <div className="flex flex-col gap-2">
                            <span className="text-2xl font-bold">Route Overview</span>
                        </div>
                    <div className="flex gap-20 border-b border-gray-400 pb-3">
                        <RoadOverview
                        icon={ <FaRegClock className="text-blue-400" size={30}/>}
                        title="2h 30min"
                        desciprion="Duration"/>
                        <RoadOverview
                        icon={ <FaDollarSign className="text-green-400" size={30} />}
                        title="8.5 TND"
                        desciprion="Price"/>
                        <RoadOverview
                        icon={<IoMdPeople  className="text-purple-700" size={30}/>}
                        title="156"
                        desciprion="Reviews"/> 
                    </div>
                    <p className="text-gray-400">Direct route via A1 highway with scenic coastal views</p>
                </div>
                <div className="flex flex-col items-center gap-4 border border-gray-400 h-65 rounded-2xl p-5 pt-10 w-70 bg-white">
                    <p className="text-[15px] font-bold"
                    
                    >Book Your Trip</p>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl text-blue-800">8.5 TDN</p>
                        <p className="text-1xl text-gray-400">per person</p>
                    </div>
                    <button
                    onClick={()=>navigate("/login")}
                    className=" pr-10 pl-10 pt-2 pb-2 border bg-black text-white rounded-2xl hover:cursor-pointer">Book Now</button>
                    <div className="flex gap-2 items-center">
                        <FiPhone />
                        <p>Call: +216 71 123 456</p>
                    </div>
                </div>
            </div>
    )
}
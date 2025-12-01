import { FaArrowLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

export function NavRoad(){
    const navigate = useNavigate();
    
    return(
        <div className="bg-white h-20 px-6 border-b border-gray-200 shadow-sm flex items-center justify-between">
            <button
                onClick={() => navigate("/transport")} 
                className="hover:cursor-pointer group transition-all duration-200"
            >
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-all duration-200 border border-gray-200 group-hover:border-blue-200">
                        <FaArrowLeft size={24} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <span className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        Back to Options
                    </span>
                </div>
            </button>
            <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <FaStar size={26} className="text-yellow-400 fill-current drop-shadow-sm" />
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">4.2</span>
                        <span className="text-lg text-gray-500">(156 reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
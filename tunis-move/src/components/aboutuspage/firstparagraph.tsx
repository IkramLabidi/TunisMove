import { CiHeart } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

export function FirstParagraph(){
    return(
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 transform hover:translate-y-[-5px] transition-all duration-300">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                            About TunisMove
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We're revolutionizing transportation in Tunisia by making it easier for everyone to find, compare, and choose the best mobility options for their journeys.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-3 p-3 rounded-full bg-red-50 border border-red-100 shadow-sm">
                            <CiHeart size={30} className="text-red-500" />
                            <p className="font-medium text-gray-800">Made in Tunisia</p>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
                            <CiGlobe size={30} className="text-blue-500" />
                            <p className="font-medium text-gray-800">Serving All Tunisia</p>
                        </div>
                    </div>
                </div>
    )
}
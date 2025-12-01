import { FaCheckCircle } from "react-icons/fa";
import type { ReactNode } from "react";

export type AdviceFunctionProps={
    icon: ReactNode;
    stressWord : string;
    phrase: string;
}

export function AdviceFunction({icon , stressWord , phrase}: AdviceFunctionProps){
    return(
        <li className="flex items-start">
            {icon}
            <div>
                <span className="font-semibold text-gray-800">{stressWord}</span>
                <span className="text-gray-700">{phrase}</span>
            </div>
        </li>
    )
    
}

export function Advices(){
    return(
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">
                        Advice for Drivers Posting Their Info
                    </h3>
                    <ul className="space-y-5">
                        <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-gray-800">Be Accurate - </span>
                                <span className="text-gray-700">Always enter your real name, phone number, and location. Customers trust clear and correct information.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-gray-800">Choose Your Services Wisely – </span>
                                <span className="text-gray-700">Only select the services you can reliably provide (rides, delivery, moving). Don't overpromise.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-gray-800">Keep Your Phone Available – </span>
                                <span className="text-gray-700">Make sure your phone is on and reachable after posting. Fast responses lead to more work.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-gray-800">Update Your Location – </span>
                                <span className="text-gray-700">If you move or cover new areas, update your location to reach more customers nearby.</span>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <span className="font-semibold text-gray-800">Safety First – </span>
                                <span className="text-gray-700">Always prioritize your safety and follow local traffic rules when providing services.</span>
                            </div>
                        </li>
                    </ul>
                </div>
    )
}
import { GiPositionMarker } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import type { ReactNode } from "react";

type MoiniCardProps={
    icon: ReactNode;
    title: string;
    description: string;
}
export function MiniCard({ icon,title, description} : MoiniCardProps){
    return(
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
        )
        }

export function WhyChoose(){
    return(
        <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                        Why Choose TunisMove?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <MiniCard
                            icon={<GiPositionMarker size={30} className="text-blue-600" />}
                            title="Smart Route Planning"
                            description="Find the best transportation options between any two points in Tunisia with real-time data."
                        />
                        <MiniCard
                            icon={<FaRegClock size={30} className="text-indigo-600" />}
                            title="Real-Time Updates"
                            description="Get live updates on schedules, delays, and route changes to plan your journey better."
                        />
                        <MiniCard
                            icon={<IoMdPeople size={30} className="text-purple-600" />}
                            title="Community Driven"
                            description="Benefit from user reviews and ratings to choose the most reliable transport options."
                        />
                        <MiniCard
                            icon={<FaShield size={30} className="text-green-600" />}
                            title="Safe & Reliable"
                            description="All transport operators are verified and meet safety standards for your peace of mind."
                        />
                    </div>
                </div>
    )
}
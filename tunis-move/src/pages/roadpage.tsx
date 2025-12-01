import { Booking } from "../components/roadpage/booking";
import { Amenities } from "../components/roadpage/Amenities";
import { NavRoad } from "../components/roadpage/navroadpage";
import { RoadStops } from "../components/roadpage/roadstops";
export function RoadPage(){
    return(
        <div className="w-378">
            <NavRoad/>
            <div className="p-40 flex flex-col gap-10 bg-[#ecf2fe] h-380">
                <Booking/>
            <div className="bg-white w-275 flex flex-col gap-10 p-10 border rounded-2xl border-gray-400 ">
                <p className="font-bold text-2xl">Daily Schedule</p>
                <div className="flex items-center justify-center gap-10">
                    <span className="p-2 border rounded-2xl border-gray-400">06:00</span>
                    <span className="p-2 border rounded-2xl border-gray-400">08:30</span>
                    <span className="p-2 border rounded-2xl border-gray-400">11:00</span>
                    <span className="p-2 border rounded-2xl border-gray-400">14:30</span>
                    <span className="p-2 border rounded-2xl border-gray-400">17:00</span>
                    <span className="p-2 border rounded-2xl border-gray-400">19:30</span>
                </div>
            </div>
            <RoadStops/>
            <Amenities/>
        </div>
        </div>
        
    )
}
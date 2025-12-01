import { PiWarningCircle } from "react-icons/pi";
import { TravelTips } from "./traveltips";
import { RoadStopsContainer } from "./roadstoprsfunction";
export function RoadStops(){
    return (
        <div className="flex gap-10 items-center">
                <div className="flex flex-col items-center border border-gray-400 p-10 rounded-2xl bg-white w-120 gap-10">
                    <div className="flex items-center gap-3">
                        <PiWarningCircle size={30} />
                        <p className="font-bold text-2xl">Travel Tips</p>
                    </div>
                    <TravelTips/>
                </div>
                <RoadStopsContainer/>
            </div>
)
}

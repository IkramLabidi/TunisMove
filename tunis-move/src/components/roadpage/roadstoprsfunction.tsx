import { GoDotFill } from "react-icons/go";
import type { ReactNode } from "react";
export type RoadStopsContainerProps={
    icon: ReactNode;
    title: string;
    time: string;
}
export function RoadStopsFunction({icon, title, time}: RoadStopsContainerProps){
    return(
        <div className="flex">
            {icon}
            <div>
                <p>{title}</p>
                <p className="text-gray-400">{time}</p>
            </div>
        </div>
    )
}
export function RoadStopsContainer(){
    return(
        <div className="flex flex-col items-center gap-10 border border-gray-400 bg-white w-145 h-74 rounded-2xl p-5">
                    <span className="text-2xl font-bold">Route Stops</span>
                    <div className="flex flex-col gap-5">
                        <RoadStopsFunction
                        icon = {<GoDotFill className="text-green-500" size={30} />}
                        title="Tunis Central Station"
                        time="06:00 • 0min"
                        />
                        <RoadStopsFunction
                        icon={<GoDotFill className="text-blue-500" size={30} />}
                        title="Hammamet Junction"
                        time="07:15 • 1h 15min"
                        />
                        <RoadStopsFunction
                        icon={<GoDotFill className="text-red-500" size={30} />}
                        title="Sousse Central Station"
                        time="08:30 • 2h 30min"
                        />
                    </div>
                </div>
    )
}
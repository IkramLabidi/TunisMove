import { FaBusAlt } from "react-icons/fa";
import { TransportChoisesCards } from "./tansportchoises";
import { FaTaxi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { BsTrainLightrailFront } from "react-icons/bs";
export function Choices(){
    return(
        <div className="flex flex-col justify-center items-center mt-20 gap-10">
            <div className="flex gap-10">
                    <TransportChoisesCards
                        icon= {<FaTaxi size={20} className="text-yellow-300" />}
                        text="Private Taxis"
                        description="Local Taxi"
                        time="1h 30min"
                        price="45 TND"
                        availability="On demand"
                        quality="High"
                        RoadDetails="Fastes route via highway"
                        Stops="Door to door service"
                    />
                    <TransportChoisesCards
                        icon={<FaBusAlt size={20} className="text-blue-400"/>}
                        text="Public Buses"
                        description="SNTRI"
                        time="2h 30min"
                        price="8.5 TND"
                        availability="Every 30min"
                        quality="High"
                        RoadDetails="Direct route via A1 highway"
                        Stops="Tunis Central / Hammamet / Sousse Central"
                    />
                    </div>
                    <div className="flex gap-10">
                    <TransportChoisesCards
                        icon={<FaShuttleVan size={20} className="text-violet-500"/>}
                        text="Shared Taxis (Louage)"
                        description="Louage Station"
                        time="1h 45min"
                        price="12 TND"
                        availability="When full"
                        quality="Medium"
                        RoadDetails="Coastal route with scenic views"
                        Stops="Tunis Louage Station / Direct to destination"
                    />
                    <TransportChoisesCards
                        icon={<BsTrainLightrailFront size={20} className="text-green-500"/>}
                        text="Metro & Light Rail"
                        description="SNTRI"
                        time="3h 45min"
                        price="11.5 TND"
                        availability="Every 30min"
                        quality="Medium"
                        RoadDetails="Direct route via A1 highway"
                        Stops="Tunis Central / Hammamet / Sousse Central"
                    />
                </div>
        </div>
            
    )
}
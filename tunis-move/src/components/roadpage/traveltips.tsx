import { GoDotFill } from "react-icons/go";
export type TravelTipsProps={
    title: string;
}

export function TravelTipsContainer({ title } : TravelTipsProps){
    return(
        <div className="flex items-center">
        <GoDotFill className="text-blue-500" size={30} />
        <span>{title}</span>
    </div>
    )
}

export function TravelTips(){
    return(
        <div className="flex flex-col gap-5">
            <TravelTipsContainer
            title="Book tickets in advance during peak season"/>
            <TravelTipsContainer
            title="Arrive 15 minutes before departure"/>
            <TravelTipsContainer
            title="Keep your ticket until the end of journey"/>
        </div>
    )
}
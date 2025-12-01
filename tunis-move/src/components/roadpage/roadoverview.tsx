import type { ReactNode } from "react";

type RoadOverviewProps={
    icon: ReactNode;
    title: string;
    desciprion: string;
};

export function RoadOverview({icon, title, desciprion}:RoadOverviewProps){
    return(
        <div className=" flex flex-col items-center">
            {icon}
            <p className="font-bold">{title}</p>
            <p className="text-gray-500">{desciprion}</p>
        </div>
    )
}
import {FormHomePage} from "../components/searchpage/formsearchpage";
import { MapAPI } from "../components/searchpage/mapAPI";
import { useState } from "react";

export function SearchPage(){
    const [position, setPosition] = useState("");
    const [destination, setDestination] =useState("");

    return(
        <div className="bg-[#e8efff] p-5 w-378 h-300 flex flex-col gap-10 items-center ">
            <FormHomePage
            position= {position}
            setPosition = {setPosition}
            destination = {destination}
            setDestination= {setDestination}
            />
            <MapAPI position= {position} destination={destination}/>
        </div>
    )
}
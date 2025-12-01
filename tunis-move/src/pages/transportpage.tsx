import { Choices } from "../components/transportpage/choises"
import {NavBarTransportPage} from "../components/transportpage/navbartrasnportpage" 

export function TransportPage(){
    return(
        <div className="bg-[#ecf2fe] h-300 ">
            <NavBarTransportPage/>
            <Choices/>
        </div>
    )
}
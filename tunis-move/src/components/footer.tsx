import { GiPositionMarker } from "react-icons/gi";
import {Link} from "react-router";

export function Footer(){
    return(
        <div className="bg-[#101727] w-378 h-60 p-5 ">
            <div className="text-white flex items-center justify-center gap-5 mb-10 border-b border-gray-200 pb-5">
                <div className="flex flex-col items-center gap-2 w-70">
                    <div className="flex items-center gap-2">
                        <GiPositionMarker size={20}/>
                        <span className="text-1xl font-bold">TunisMove</span>
                    </div>
                    <span className="text-[15px]">Making transportation in Tunisia accessible and efficient for everyone</span>
                </div>
                <div className="flex flex-col gap-2 w-70 h-30">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold">Platform</span>
                        <Link to="/homepage" > Home</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold">Support</span>
                        <Link to="/aboutus" >About Us</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-70">
                        <span className="font-bold">Connect</span>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <Link to={"https://www.facebook.com/"} target="_blank" >Facebook</Link>
                            <Link to={"https://www.twitter.com/"} target="_blank" >Twitter</Link>
                            <Link to={"https://www.instagram.com/"} target="_blank" >Instagram</Link>
                        </div>
                </div>
            </div>
            <div>
                <span className="text-white mt-10">© 2025 TunisMove. All rights reserved.</span>
            </div>
        </div>
    )
}
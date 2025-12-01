import { GoDotFill } from "react-icons/go";

export function Amenities(){
    return (
        <div className="flex flex-col items-center justify-center gap-10 w-275 h-50 p-10 bg-white border border-gray-400 rounded-2xl ">
                    <p className="text-2xl font-bold">Amenities & Features</p>
                    <div className="flex gap-20 items-center">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-5">
                                <GoDotFill className="text-green-500" size={30} />
                                <p>Air Conditioning</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <GoDotFill className="text-green-500" size={30} />
                                <p>Comfortable Seats</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-5">
                                <GoDotFill className="text-green-500" size={30} />
                                <p>WiFi</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <GoDotFill className="text-green-500" size={30} />
                                <p>Luggage Storage</p>
                            </div>
                        </div>
                    </div>
            </div>
    )
}
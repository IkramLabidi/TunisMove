import { useState } from "react";
import { useNavigate } from "react-router";
import { FaMapMarkerAlt, FaLocationArrow, FaSearch, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

export type FormHomePageProps={
    position: string;
    destination: string;
    setPosition: (value:string) => void;
    setDestination : (value:string)=> void;
}

export function FormHomePage({position, setPosition, destination, setDestination}: FormHomePageProps){
    const [destinations, setDestinations]= useState([
        {
            id:"1",
            destination:"Tunis",
        }
    ]);
    const navigate = useNavigate();

    const handleSubmit=(event: any)=>{
        event.preventDefault();
        const newDestination= {
            id: (destinations.length +1).toString(),
            destination,
        };
        setDestinations([newDestination, ...destinations]);
    };
    const handledelete= (id: string)=>{
        setDestinations(destinations.filter((c)=> c.id!==id));
    }
    return(
        <div className="w-full max-w-4xl">
            <div className="bg-white/90 backdrop-blur-md shadow-lg p-8 flex flex-col items-center rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Find Your Ride
                </h2>
                
                <form className="w-full flex flex-wrap md:flex-nowrap gap-4 mb-8" onSubmit={handleSubmit}>
                    <div className="relative w-full md:w-2/5 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaMapMarkerAlt className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <input 
                            type="text"
                            placeholder="Your Position" 
                            required
                            value={position}
                            onChange={(event) => setPosition(event.target.value)}
                            className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
                        />
                    </div>
                    
                    <div className="relative w-full md:w-2/5 group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaLocationArrow className="text-blue-500 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <input 
                            type="text"
                            placeholder="Your Destination" 
                            required 
                            value={destination}
                            onChange={(event)=> {setDestination(event.target.value)}}
                            className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full md:w-1/5 py-3 px-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <FaSearch className="animate-pulse" />
                        <span>Search</span>
                    </button>
                </form>
                
                <div className="w-full flex flex-col gap-4">
                    {destinations.length > 0 && (
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Searches</h3>
                    )}
                    
                    {destinations.map((e)=>(
                        <div
                            key={(e.id)}
                            className="w-full px-6 py-4 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow className="text-blue-500" />
                                    <span className="font-medium text-gray-800">{e.destination}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 ml-auto">
                                    <button 
                                        onClick={()=>{navigate("/transport")}}
                                        className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-md hover:shadow-green-500/20 transition-all duration-300"
                                    >
                                        <FaInfoCircle />
                                        <span>Details</span>
                                    </button>
                                    
                                    <button 
                                        onClick={()=>handledelete(e.id)} 
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                                    >
                                        <FaTimesCircle />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}






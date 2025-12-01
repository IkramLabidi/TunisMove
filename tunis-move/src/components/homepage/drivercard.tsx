import { useNavigate } from "react-router";

export function DriverCard(){
    const navigate= useNavigate();

    return (
        <div className="group relative h-96 w-80 bg-white rounded-3xl p-8 flex flex-col justify-center items-center gap-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                    <div className="absolute -top-6 bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-2xl shadow-lg">
                        <span className="text-4xl">🚦</span>
                    </div>
                    
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent mt-4">
                        I'm a Driver!
                    </h1>
                    
                    <span className="text-xl text-gray-600 text-center leading-relaxed">
                        Pick, drive, earn<br />Your ride, your rules
                    </span>
                    
                    <button className="bg-gradient-to-r from-green-500 to-green-600 py-4 px-8 rounded-2xl text-white text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
                    onClick={()=>{navigate("/posts")}}>
                        Start Driving
                    </button>
                </div>
    )
}
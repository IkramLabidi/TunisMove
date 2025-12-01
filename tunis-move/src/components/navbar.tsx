import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router";

export function NavBar() {
    return(
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4 px-6 font-sans border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-2 rounded-full group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                            <GiPositionMarker size={28} className="text-blue-600 group-hover:text-blue-500 transition-colors"/>
                        </div>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            TunisMove
                        </span>
                    </Link>   
                </div>
                <div className="flex items-center gap-8">
                    <Link 
                        to="/" 
                        className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/AvailableDrivers" 
                        className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                        Available Drivers
                    </Link>
                    <Link 
                        to="/aboutUs" 
                        className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/Login" 
                        className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:translate-y-[-2px]"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
import { ClientCard } from "../components/homepage/clientCard"
import { DriverCard } from "../components/homepage/drivercard"

export function HomePage(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center px-4 py-8 font-serif">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to TunisMove</h1>
                <p className="text-xl text-gray-600 max-w-2xl">Choose your experience below to get started</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full justify-center items-center">
                <ClientCard/>
                <DriverCard/>
            </div>
            <div className="mt-16 text-center max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
                    <div className="flex flex-col items-center p-4">
                        <div className="text-3xl mb-2">⚡</div>
                        <h3 className="font-bold text-lg text-gray-800">Instant Matching</h3>
                        <p className="text-sm">Get matched with riders or drivers in seconds</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h3 className="font-bold text-lg text-gray-800">Safe & Secure</h3>
                        <p className="text-sm">Verified users and real-time tracking</p>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className="text-3xl mb-2">💳</div>
                        <h3 className="font-bold text-lg text-gray-800">Easy Payments</h3>
                        <p className="text-sm">Cashless transactions with multiple options</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
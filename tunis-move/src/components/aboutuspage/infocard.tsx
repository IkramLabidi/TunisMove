export type InfoProps={
    title :  string;
    description : string;
}

export function Info({title, description} : InfoProps){
    return(
        <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export function InfoCard(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
                        <Info
                        title="50+"
                        description="Cities Covered"
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-indigo-500">
                        <Info
                        title="200+"
                        description="Transport Routes"
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-purple-500">
                        <Info
                        title="10K+"
                        description="Happy Users"
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 border-t-4 border-green-500">
                        <Info
                        title="4.8"
                        description="Average Rating"
                        />
                    </div>
                </div>
    )
}
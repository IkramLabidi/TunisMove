import { AddPost } from "../components/postspage/addpost";
import { FaCarSide } from "react-icons/fa";
import { Advices } from "../components/postspage/advices";

export function PostsPage(){
    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                        <FaCarSide size={50} className="text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                        Post Your Driving Services
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        If you own a car and want to work, simply post your details here so people can find you and contact you directly.
                    </p>
                </div>
                
                <div className="mb-16 transform hover:translate-y-[-5px] transition-all duration-300">
                    <AddPost/>
                </div>
                <Advices/>
            </div>
        </div>
    )
}
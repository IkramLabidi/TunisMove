import { SiGmail } from "react-icons/si";
import { FaFacebookSquare , FaInstagram} from "react-icons/fa";
import { useState } from "react";

type DefaultMode="login" | "registration";
export function LoginPage(){
    const [mode, setMode] = useState<DefaultMode>("login");
    return(
        <div className="w-378 h-200 bg-[#e7eeff] flex justify-center items-center ">
            <div className="bg-white w-120 h-150 rounded-2xl flex font-serif ">
                {mode === "registration" && (
                    <div className="w-125 h-150 rounded-2xl flex flex-col gap-5 justify-center items-center">
                    <span className="text-4xl font-bold">Registration</span>
                    <form action="" className="flex flex-col gap-5">
                        <input type="text" placeholder="User Name..." required className="w-100 h-10 border rounded-2xl px-5 py-2" onSubmit={e => e.preventDefault()}/>
                        <input type="Email" placeholder="Enter Your Email..." required className="w-100 h-10 border rounded-2xl px-5 py-2"/>
                        <input type="password" placeholder="Enter Your Password..." required className="w-100 h-10 border rounded-2xl px-5 py-2"/>
                        <input type="password" placeholder="Repeat Your Password..." required className="w-100 h-10 border rounded-2xl px-5 py-2"/>
                        <label htmlFor="">
                            <input type="checkbox" /> Accept Terms & Conditions
                        </label>
                    </form>
                    <button className=" rounded-2xl w-100 h-12 font-bold bg-blue-200 hover:cursor-pointer"
                    onClick={()=> setMode("login")}
                    >Register</button>
                    <div className="flex flex-col gap-5">
                        <span>Or register with social platforms</span>
                        <div className="flex items-center justify-center gap-10">
                            <SiGmail size={30} className="text-red-500" />
                            <FaFacebookSquare size={30} className="text-blue-600" />
                            <FaInstagram size={30} className="text-pink-700" />
                        </div>
                        <button 
                        onClick={()=> setMode("login")}
                        className=" hover:text-blue-700 hover:underline">
                            Already have an account? Sign In
                        </button>
                    </div>
                    
                </div> 
                )}
                {mode === "login" && (
                    <div className="w-125 h-150 rounded-2xl flex flex-col gap-5 justify-center items-center mt-5">
                    <span className="text-4xl font-bold">Login</span>
                    <form action="" className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="User Name..." required className="w-100 h-10 border rounded-2xl px-5 py-2"/>
                        <input type="password" placeholder="Enter Your Password..." required className="w-100 h-10 border rounded-2xl px-5 py-2"/>
                    </form>
                    <button className=" rounded-2xl w-100 h-12 font-bold bg-blue-200 mt-10 hover:cursor-pointer">Login</button>
                    <div className="flex flex-col gap-5">
                        <span>Or login with social platforms</span>
                        <div className="flex items-center justify-center gap-10">
                            <SiGmail size={30} className="text-red-500" />
                            <FaFacebookSquare size={30} className="text-blue-600" />
                            <FaInstagram size={30} className="text-pink-700" />
                        </div>
                        <button 
                        onClick={() => setMode("registration")}
                        className=" hover:text-blue-700 hover:underline ">
                            Don't have an account? Sign Up
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
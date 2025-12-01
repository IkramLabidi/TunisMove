import { DropDown } from "../dropdown";
import { FaLocationArrow, FaUser, FaPhone , FaTruckMoving} from "react-icons/fa";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FormButton } from "./form";

export function AddPost(){
    const navigate = useNavigate();

    const [name, setName]= useState("");
    const [phoneNumber, setPhoneNumber]= useState("");
    const [service, setService]= useState("Service");
    const [place, setPlace]= useState("PLace");

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        navigate("/availabledrivers", {
            state:{
                name, phoneNumber , service ,place
            }
        })
    }

    const TunisiaGovernorates=["Ariana","Béja","Ben Arous","Bizerte","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","Manouba","Kef","Mahdia","Médenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"]

    return(
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Enter Your Information
                </h1>
                <p className="text-gray-500 mt-2">Please provide your details below</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500">
                        <FaUser />
                    </div>
                    <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Full Name..." 
                        className="w-full pl-10 pr-4 py-3 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 outline-none" 
                    />
                </div>
                
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500">
                        <FaPhone />
                    </div>
                    <input 
                        type="number" 
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Your Phone Number..." 
                        className="w-full pl-10 pr-4 py-3 border-0 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300 outline-none" 
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
                        <DropDown
                            onChange={setService}
                            icon={<FaTruckMoving size={20} className="text-blue-500" />}
                            options={["Service","rides", "delivery", "moving"]}
                            defaultLabel="Service"
                            
                        />
                    </div>
                    
                    <div className="space-y-2 flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <DropDown 
                            icon={<FaLocationArrow size={20} className="text-blue-500" />}
                            options={["Location", ...TunisiaGovernorates]}
                            defaultLabel="Location"
                            onChange={setPlace}
                        />
                    </div>
                </div>
                <FormButton/>  
            </form>
        </div>
    )
}
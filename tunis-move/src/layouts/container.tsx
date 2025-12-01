import { Footer } from "../components/footer";
import { Outlet } from "react-router";
import { NavBar } from "../components/navbar";

export function Container(){

    return(
        <div>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )

}
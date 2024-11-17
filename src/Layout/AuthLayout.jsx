import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-Poppins bg-[#F3F3F3]">
            <header className="py-3 w-11/12 mx-auto ">
                <Navbar></Navbar>
            </header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;
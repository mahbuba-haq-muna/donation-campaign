import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div>
            <div className="px-10">
            <Navbar></Navbar>
            </div>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Mainlayout;
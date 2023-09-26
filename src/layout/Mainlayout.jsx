import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";
import Banner from "../component/Header/Banner/Banner";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;
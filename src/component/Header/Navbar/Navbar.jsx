import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div  className="max-w-[1300px] mx-auto">
            <nav className="flex justify-between item-center py-5">
                <div><img src="https://i.ibb.co/2j4ZQ3Z/Logo.png" alt="" /></div>
                <ul className="flex gap-5 py-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-rose-500 underline font-semibold" : ""
                            }
                            >
                           Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-rose-600 underline font-semibold" : ""
                            }
                            >
                           Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-rose-600 underline font-semibold" : ""
                            }
                            >
                           Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
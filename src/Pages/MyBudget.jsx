import React, { useEffect } from "react";
import { LogoutApi } from "../Utilities/LogoutApi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
export const MyBudget = () => {


    const [userLoggedIn, setUserLoggedIn] = useOutletContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        LogoutApi(setUserLoggedIn)
    }

    useEffect(() => {
        if(!userLoggedIn) {
            navigate("/")
        }
    }, [userLoggedIn])

    return (
        <div className="hero items-start min-h-screen bg-base-200">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className=" drawer-toggle" />
                <div className=" m-2 drawer-content flex flex-col items-start justify-normal">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-neutral drawer-button lg:hidden"
                    >
                        Menu
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-50 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <button className="btn content-center">Getting Started</button>
                        </li>
                        <li>
                            <button className="btn btn-nav content-center">My Finances</button>
                        </li>
                        <li>
                            <Link to="/" className="btn btn-nav content-center" onClick={handleLogout} replace>Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

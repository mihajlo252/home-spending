import React, { useEffect } from "react";
import { LogoutApi } from "../Utilities/LogoutApi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Table } from "../Components/Table";
import DashboardStyles from "./Dashboard.module.css";

export const Dashboard = () => {
    const [userLoggedIn, setUserLoggedIn, user, setUser] = useOutletContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutApi(setUserLoggedIn);
    };

    const isUserLoggedIn = localStorage.getItem("sb-vvyrcrkgzorpqxjwmlky-auth-token");

    useEffect(() => {
        if (isUserLoggedIn) {
            setUserLoggedIn(true);
            setUser(JSON.parse(isUserLoggedIn).user || null);
        }
        if (!isUserLoggedIn) {
            navigate("/login");
        }
    }, [userLoggedIn]);

    const tableRows = [
        {
            id: 1,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 2,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 3,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 4,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 5,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 6,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 7,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 8,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 9,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
        {
            id: 10,
            name: "Ati",
            amount: "$100",
            date: "5th March",
            image: "url",
        },
    ];

    return (
        <div className={`hero items-center min-h-screen w-screen bg-base-200`}>
            <div className="drawer drawer-open pr-40 gap-7">
                <ul className="menu p-4 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <button className="btn content-center">Getting Started</button>
                    </li>
                    <li>
                        <button className="btn btn-nav content-center">My Finances</button>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="btn btn-nav content-center"
                            onClick={handleLogout}
                            replace
                        >
                            Log Out
                        </Link>
                    </li>
                </ul>
                <div className="drawer-content flex flex-row justify-start gap-5">
                    <Table tableRows={tableRows} />
                    {/* <p className="hidden lg:block">Hello this is sidebar text!</p> */}
                </div>
            </div>
        </div>
    );
};

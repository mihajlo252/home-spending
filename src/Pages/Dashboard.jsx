import React, { useEffect, useState } from "react";
import { LogoutApi } from "../Utilities/LogoutApi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Table } from "../Components/Table";
import { GetAllSpendings } from "../Utilities/GetAllSpendings";
import { GetUserEmailFromId } from "../Utilities/GetUserEmailFromId";


export const Dashboard = () => {
    const [userLoggedIn, setUserLoggedIn, user, setUser] = useOutletContext();
    const [tableRows, setTableRows] = useState([]);
    const [userEmailsFromId, setUserEmailsFromId] = useState([])
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutApi(setUserLoggedIn);
    };

    const handleGetData = async () => {
        const res = await GetAllSpendings();
        const emails = await GetUserEmailFromId()
        setTableRows(res.data);
        setUserEmailsFromId(emails.data)
    };

    const isUserLoggedIn = localStorage.getItem("sb-rngxfrqygzomwuycgeej-auth-token");

    useEffect(() => {
        if (isUserLoggedIn) {
            setUserLoggedIn(true);
            setUser(JSON.parse(isUserLoggedIn).user || null);
            handleGetData();
        }
        if (!isUserLoggedIn) {
            navigate("/login");
        }
    }, [userLoggedIn]);

    return (
        <div
            className={`flex justify-between px-5 items-center auto-cols-max min-h-screen bg-base-200 `}
        >
            <ul className="menu p-4 pl-0 h-full bg-base-200 text-base-content place-self-start">
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
            <div>
                <Table tableRows={tableRows} userEmailsFromId={userEmailsFromId} />
            </div>
            <p className="hidden lg:inline justify-self-end">Sidebar</p>
        </div>
    );
};

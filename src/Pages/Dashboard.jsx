import React, { useEffect, useState } from "react";
import { LogoutApi } from "../Utilities/LogoutApi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Table } from "../Components/Table";
import { GetAllSpendings } from "../Utilities/GetAllSpendings";
import { GetUserEmailFromId } from "../Utilities/GetUserEmailFromId";
import { GettingStarted } from "./Subpages/GettingStarted";
import { AddFinance } from "./Subpages/AddFinance";

export const Dashboard = () => {
    const [userLoggedIn, setUserLoggedIn, user, setUser] = useOutletContext();
    const [tableRows, setTableRows] = useState([]);
    const [userEmailsFromId, setUserEmailsFromId] = useState([]);
    const [subpage, setSubpage] = useState(
        sessionStorage.getItem("dashboard-subpage") || "gettingstarted"
    );
    const navigate = useNavigate();

    const handleLogout = () => {
        LogoutApi(setUserLoggedIn);
        sessionStorage.removeItem("dashboard-subpage");
        console.log("1");
    };

    const handleGetData = async (userId) => {
        const res = await GetAllSpendings(userId);
        const emails = await GetUserEmailFromId();
        setTableRows(res.data);
        setUserEmailsFromId(emails.data);
        console.log("2");

    };

    const handleSetSubpage = (page) => {
        setSubpage(page);
        sessionStorage.setItem("dashboard-subpage", page);
        console.log("3");

    };

    const isUserLoggedIn = localStorage.getItem("sb-rngxfrqygzomwuycgeej-auth-token");

    useEffect(() => {
        if (isUserLoggedIn) {
            setUserLoggedIn(true);
            setUser(JSON.parse(isUserLoggedIn).user || null);
            if(user != null) {
                handleGetData(user.id)
            }
        }
        if (!isUserLoggedIn) {
            navigate("/login");
        }
        console.log("4");
    }, [userLoggedIn]);

    return (
        <div
            className={`flex justify-between px-5 items-center auto-cols-max min-h-screen bg-base-200 `}
        >
            <ul className="menu p-4 pl-0 h-full bg-base-200 text-base-content place-self-start">
                <li>
                    <button
                        className="btn content-center"
                        onClick={() => handleSetSubpage("gettingstarted")}
                    >
                        Getting Started
                    </button>
                </li>
                <li>
                    <button
                        className="btn btn-nav content-center"
                        onClick={() => handleSetSubpage("myfinances")}
                    >
                        My Finances
                    </button>
                </li>
                <li>
                    <button
                        className="btn btn-nav content-center"
                        onClick={() => handleSetSubpage("addfinance")}
                    >
                        Add Finance
                    </button>
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
            {subpage === "gettingstarted" && <GettingStarted />}
            {subpage === "myfinances" && (
                <div>
                    <Table tableRows={tableRows} userEmailsFromId={userEmailsFromId} />
                </div>
            )}
            {subpage === "addfinance" && <AddFinance userId={user} setSubpage={setSubpage} />}

            <p className="hidden lg:inline justify-self-end">Sidebar</p>
        </div>
    );
};

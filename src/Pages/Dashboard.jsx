import React, { useEffect, useState } from "react";
import { LogoutApi } from "../Utilities/LogoutApi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { GettingStarted } from "./Subpages/GettingStarted";
import { AddFinance } from "./Subpages/AddFinance";
import { MyFinances } from "./Subpages/MyFinances";

export const Dashboard = () => {
  const [user] = useOutletContext();
  
  const [subpage, setSubpage] = useState(
    sessionStorage.getItem("dashboard-subpage") || "gettingstarted"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutApi(user);
    sessionStorage.removeItem("dashboard-subpage");
  };
  const handleSetSubpage = (page) => {
    setSubpage(page);
    sessionStorage.setItem("dashboard-subpage", page);
  };
  useEffect(() => {
    
    if (!user) {
      navigate("/login");
    }
  }, [user, subpage]);

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
      {subpage === "myfinances" && <MyFinances user={user}/>}
      {subpage === "addfinance" && (
        <AddFinance user={user} setSubpage={setSubpage} />
      )}

      <p className="inline"></p>
    </div>
  );
};

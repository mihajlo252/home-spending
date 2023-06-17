import React from "react";
export const MyBudget = () => {
    return (
        <div className="hero items-start min-h-screen bg-base-200">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className=" drawer-toggle" />
                <div className=" m-2 drawer-content flex flex-col items-start justify-normal">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-50 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <button className="btn btn-nav content-center">Getting Started</button>
                        </li>
                        <li>
                            <button className="btn btn-nav content-center">My Finances</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

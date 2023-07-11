import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ user }) => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl ml-4">
                    homeSpending
                </Link>
            </div>

            <div className="navbar-end gap-2 mr-4">
                {user ? (
                    <p>{user.email}</p>
                ) : (
                    <>
                        <Link to="/register" className="btn">
                            Register
                        </Link>
                        <Link to="/login" className="btn btn-primary text-neutral">
                            Log in
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

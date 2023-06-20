// import { Landing } from "../Components/Landing";
import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import background from "../Assets/Images/tierra-mallorca-JXI2Ap8dTNc-unsplash.jpg";

export const Home = () => {
    const [userLoggedIn, setUserLoggedIn, user, setUser] = useOutletContext()

    const isUserLoggedIn = localStorage.getItem("sb-vvyrcrkgzorpqxjwmlky-auth-token")

    useEffect(() => {
        if(isUserLoggedIn) {
            setUserLoggedIn(true)
            setUser(JSON.parse(isUserLoggedIn).user || null)
        }
    }, [])

    return (
        <div
            className="hero items-center min-h-screen"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-overlay backdrop-blur"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mb-20">
                    <h2 className="mb-5 text-5xl font-bold">Hello there</h2>
                    <p className="mb-5">
                        Welcome to homeSpending! Here we provide a way for you to keep your home
                        budget in check.
                    </p>
                    <Link to={userLoggedIn ? `${user?.id}/dashboard` : "/login"} className="btn btn-accent text-neutral">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

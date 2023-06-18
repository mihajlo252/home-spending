import React from "react";
import { Link } from "react-router-dom";
import background from "../Assets/Images/tierra-mallorca-JXI2Ap8dTNc-unsplash.jpg";
import { supabase } from "../supabase/Supabase";

export const Home = () => {

    return (
        <div
            className="hero items-center min-h-screen"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-overlay backdrop-blur"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mb-20">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Welcome to homeSpending! Here we provide a way for you to keep your home
                        budget in check.
                    </p>
                    <Link to="/login" className="btn btn-accent text-neutral">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const Root = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <div>
            <Navbar />
            <Outlet context={[userLoggedIn, setUserLoggedIn, user, setUser]}/>
            <Footer />
        </div>
    );
};

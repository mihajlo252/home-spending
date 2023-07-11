import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const Root = () => {
    const [userToken, setUserToken] = useState(
        JSON.parse(localStorage.getItem("sb-rngxfrqygzomwuycgeej-auth-token")) || null
    );
    const user = useRef(userToken);

    return (
        <div>
            <Navbar user={user} />
            <Outlet context={[user]} />
            <Footer />
        </div>
    );
};

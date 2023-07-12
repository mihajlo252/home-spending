import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const Root = () => {
    const userToken = JSON.parse(localStorage.getItem("sb-rngxfrqygzomwuycgeej-auth-token"))
    const user = userToken ? useRef(userToken.user) : useRef(userToken)

    return (
        <div>
            <Navbar user={user} />
            <Outlet context={[user]} />
            <Footer />
        </div>
    );
};

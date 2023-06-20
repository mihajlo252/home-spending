import React from "react";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

// pages
import { Root } from "./Layout/Root";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/:id/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
    ])
);

export const App = () => {
    return <RouterProvider router={router} />;
};
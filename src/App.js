import React from "react";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Root } from "./Layout/Root";
import { MyBudget } from "./Pages/MyBudget";
import { Home } from "./Pages/Home";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/spending" element={<MyBudget />} />
        </Route>,
    ])
);

export const App = () => {
    return <RouterProvider router={router}/>;
};
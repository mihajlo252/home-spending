import React from "react";
import { supabase } from "../supabase/Supabase";

export const LogoutApi = async (setUserLoggedIn) => {
    const { data, error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        return;
    }

    setUserLoggedIn(false);
    return data;
};

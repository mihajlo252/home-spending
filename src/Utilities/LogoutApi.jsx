import { supabase } from "../supabase/Supabase";

export const LogoutApi = async (user) => {
    user.current = null
    const { data, error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        return;
    }
    return data
};

import { supabase } from "../supabase/Supabase";

export const LoginApi = async (email, password, user) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if(error) {
        console.error(error);
        return
    }
    user.current = data.user
    return data
}

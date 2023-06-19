import { supabase } from "../supabase/Supabase";

export const LoginApi = async (email, password, setUserLoggedIn, setUser) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if(error) {
        console.error(error);
        return
    } 
    setUserLoggedIn(true)
    setUser(data.user)
    return data
}

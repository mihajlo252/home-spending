import { supabase } from "../supabase/Supabase";

export const RegisterApi = async (email, password) => {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if(error) {
        console.error(error);
        return
    } 
    return data
}

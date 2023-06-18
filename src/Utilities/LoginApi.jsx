import { supabase } from "../supabase/Supabase";

export const LoginApi = async (email, password) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if(error) {
        console.error(error);
        return
    } 
    console.log(data);
}

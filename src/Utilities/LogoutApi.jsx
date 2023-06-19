import React from 'react'
import { supabase } from '../supabase/Supabase';

export const LogoutApi = async () => {
  const {data, error} = await supabase.auth.signOut()
  

if(error) {
    console.error(error);
    return
} 
return data
}

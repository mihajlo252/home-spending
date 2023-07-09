import React from 'react'
import { supabase } from '../supabase/Supabase'

export const GetUserEmailFromId = async () => {
    const user = await supabase.from("user").select("id, email")
    return user
}

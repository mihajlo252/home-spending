import React from 'react'
import { supabase } from '../supabase/Supabase'

export const GetAllSpendings = async (userId) => {
  const data = await supabase.from("spending").select().eq("user_id", userId)
  return data
}

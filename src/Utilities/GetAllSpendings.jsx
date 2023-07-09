import React from 'react'
import { supabase } from '../supabase/Supabase'

export const GetAllSpendings = async () => {
  const data = await supabase.from("spending").select("*")
  return data
}

import React from 'react'
import { supabase } from '../supabase/Supabase'

export const GetRoomIdFromName = async (room) => {
  const data = await supabase.from("rooms").select().eq("name", room)
  return data.data[0].id
}

import { supabase } from "../supabase/Supabase";
import { GetRoomIdFromName } from "./GetRoomIdFromName";

export const AddFinanceApi = async (amount, room, userId) => {
    const room_id = await GetRoomIdFromName(room);
    const { data, error } = await supabase.from("spending").insert({
        room_id: room_id,
        amount: amount,
        user_id: userId,
    });

    if (error) {
        console.error(error);
        return;
    }
    return data;
};
